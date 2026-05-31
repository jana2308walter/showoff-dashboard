/* eslint-disable @typescript-eslint/no-explicit-any */
import { HOURLY_WEATHERS } from './hourly-weather';
import { DAILY_WEATHERS } from './daily-weather';
import { fetchWeatherApi } from 'openmeteo';
import { Injectable, resource, signal } from '@angular/core';
import {
  Coordinates,
  CurrentWeatherConfig,
  ForecastWeatherConfig,
  Weather,
  WeatherKey
} from './weather';
import { CURRENT_WEATHER } from './current-weather';
import { weatherParsers } from './weather-parsers';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly $coordinatesState = signal<Coordinates>({
    latitude: NaN,
    longitude: NaN
  });
  readonly $coordinates = this.$coordinatesState.asReadonly();

  set coordinates(coordinates: Coordinates) {
    this.$coordinatesState.set(coordinates);
  }

  readonly $weather = resource({
    params: () => {
      const coordinates = this.$coordinates();
      const latitude = coordinates.latitude;
      const longitude = coordinates.longitude;

      return this.coordinatesValid(latitude, longitude) ? coordinates : undefined;
    },
    loader: async ({ params }): Promise<Weather> => {
      return await this.getWeatherData(params.latitude, params.longitude);
    }
  }).asReadonly();

  private async getWeatherData(latitude: number, longitude: number): Promise<Weather> {
    const params = {
      latitude: [latitude],
      longitude: [longitude],
      current: this.mapWeatherConfigToApiKeys(CURRENT_WEATHER),
      hourly: this.mapWeatherConfigToApiKeys(HOURLY_WEATHERS),
      daily: this.mapWeatherConfigToApiKeys(DAILY_WEATHERS)
    };
    const url = 'https://api.open-meteo.com/v1/forecast';
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    // Weather Values
    const current = this.transformCurrent(response.current(), utcOffsetSeconds, CURRENT_WEATHER);
    const hourly = this.transformForecast(response.hourly(), utcOffsetSeconds, HOURLY_WEATHERS);
    const daily = this.transformForecast(response.daily(), utcOffsetSeconds, DAILY_WEATHERS);

    return {
      current,
      hourly,
      daily
    };
  }

  private buildTimestamps(start: number, end: number, interval: number, offset: number): number[] {
    return Array.from({ length: (end - start) / interval }, (_, i) =>
      new Date((start + i * interval + offset) * 1000).getTime()
    );
  }

  private coordinatesValid(latitude: number, longitude: number): boolean {
    if (isNaN(latitude) || isNaN(longitude)) {
      return false;
    }

    const latitudeInRange = latitude >= -90 && latitude <= 90;
    const longitudeInRange = longitude >= -180 && longitude <= 180;

    return latitudeInRange && longitudeInRange;
  }

  private getDateArray(object: any, index: number, utcOffsetSeconds: number): number[] {
    const value = object.variables(index);

    return [...Array(value.valuesInt64Length())].map((_, i) =>
      new Date((Number(value.valuesInt64(i)) + utcOffsetSeconds) * 1000).getTime()
    );
  }

  private getValue(object: any, index: number): number {
    return object.variables(index)?.value();
  }

  private getValueArray(object: any, index: number): Float32Array {
    return object.variables(index)?.valuesArray();
  }

  private mapWeatherConfigToApiKeys(
    weatherConfigs: CurrentWeatherConfig[] | ForecastWeatherConfig[]
  ): string[] {
    return weatherConfigs.map((weather) => weather.apiKey || '').filter(Boolean);
  }

  private parseArrayData(
    values: Float32Array | number[],
    hasUnit: boolean,
    key: WeatherKey
  ): { id: string; value: string | number }[] {
    return Array.from(values).map((value, index) => ({
      id: `${key}-${index}`,
      value: this.parseRawData(value, hasUnit, key)
    }));
  }

  private parseRawData(value: number, hasUnit: boolean, key: WeatherKey): number | string {
    const parser = weatherParsers[key];

    if (parser) {
      return parser(value);
    }

    if (hasUnit) {
      return Math.round(value ?? 0);
    }

    return value;
  }

  private transformCurrent(
    current: any,
    utcOffsetSeconds: number,
    initial: CurrentWeatherConfig[]
  ): CurrentWeatherConfig[] {
    if (!current) {
      return [];
    }

    const time = new Date((Number(current.time()) + utcOffsetSeconds) * 1000).getTime();

    return initial.map((item, index) => {
      const isTimeItem = item.key === 'time';
      const value = isTimeItem ? time : this.getValue(current, index);
      const parsedValue = this.parseRawData(value, !!item.unit, item.key);

      return {
        ...item,
        parsedValue
      } as CurrentWeatherConfig;
    });
  }

  private transformForecast(
    forecast: any,
    utcOffsetSeconds: number,
    initial: ForecastWeatherConfig[]
  ): ForecastWeatherConfig[] {
    if (!forecast) {
      return [];
    }

    const times = this.buildTimestamps(
      Number(forecast.time()),
      Number(forecast.timeEnd()),
      forecast.interval(),
      utcOffsetSeconds
    );

    return initial.map((item, index) => {
      const isTimeItem = item.key === 'time';
      const isDateItem = item.key === 'sunrise' || item.key === 'sunset';
      const values = isTimeItem
        ? times
        : isDateItem
          ? this.getDateArray(forecast, index, utcOffsetSeconds)
          : this.getValueArray(forecast, index);
      const parsedValues = this.parseArrayData(values, !!item.unit, item.key);

      return {
        ...item,
        parsedValues
      } as ForecastWeatherConfig;
    });
  }
}
