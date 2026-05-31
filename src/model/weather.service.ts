/* eslint-disable @typescript-eslint/no-explicit-any */
import { HOURLY_WEATHERS } from './hourly-weather';
import { DAILY_WEATHERS } from './daily-weather';
import { fetchWeatherApi } from 'openmeteo';
import { Injectable, resource, signal } from '@angular/core';
import { Coordinates, Weather, WEATHER_CODES, WeatherConfig, WeatherConfigs } from './weather';
import { CURRENT_WEATHER } from './current-weather';
import { v4 as uuidV4 } from 'uuid';

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

  private readonly range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  private coordinatesValid(latitude: number, longitude: number): boolean {
    if (isNaN(latitude) || isNaN(longitude)) {
      return false;
    }

    const latitudeInRange = latitude >= -90 || latitude <= 90;
    const longitudeInRange = longitude >= -180 || longitude <= 180;

    return latitudeInRange && longitudeInRange;
  }

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
    const current = this.getCurrentWeather(response.current(), utcOffsetSeconds);
    const hourly = this.getHourlyWeather(response.hourly(), utcOffsetSeconds);
    const daily = this.getDailyWeather(response.daily(), utcOffsetSeconds);

    return {
      current,
      hourly,
      daily
    };
  }

  private getCurrentWeather(current: any, utcOffsetSeconds: number): WeatherConfig[] {
    if (!current) {
      return [];
    }

    const time = new Date((Number(current.time()) + utcOffsetSeconds) * 1000).getTime();

    return CURRENT_WEATHER.map((item, index) => {
      const isTimeItem = item.key === 'time';
      const value = isTimeItem ? time : this.getValue(current, index);
      const parsedValue = this.parseRawData(value, !!item.unit, item.key);

      return {
        ...item,
        parsedValue
      } as WeatherConfig;
    });
  }

  private getHourlyWeather(hourly: any, utcOffsetSeconds: number): WeatherConfigs[] {
    if (!hourly) {
      return [];
    }

    const times = this.range(
      Number(hourly.time()),
      Number(hourly.timeEnd()),
      hourly.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000).getTime());

    return HOURLY_WEATHERS.map((item, index) => {
      const isTimeItem = item.key === 'time';
      const values = isTimeItem ? times : this.getValueArray(hourly, index);
      const parsedValues = this.parseArrayData(values, !!item.unit, item.key);

      return {
        ...item,
        parsedValues
      } as WeatherConfigs;
    });
  }

  private getDailyWeather(daily: any, utcOffsetSeconds: number): WeatherConfigs[] {
    if (!daily) {
      return [];
    }

    const times = this.range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
      (t) => new Date((t + utcOffsetSeconds) * 1000).getTime()
    );

    return DAILY_WEATHERS.map((item, index) => {
      const isTimeItem = item.key === 'time';
      const isDateItem = item.key === 'sunrise' || item.key === 'sunset';
      const values = isTimeItem
        ? times
        : isDateItem
          ? this.getDateArray(daily, index, utcOffsetSeconds)
          : this.getValueArray(daily, index);
      const parsedValues = this.parseArrayData(values, !!item.unit, item.key);

      return {
        ...item,
        parsedValues
      } as WeatherConfigs;
    });
  }

  private getValue(object: any, index: number): number {
    return object.variables(index)?.value();
  }

  private getValueArray(object: any, index: number): Float32Array {
    return object.variables(index)?.valuesArray();
  }

  private getDateArray(object: any, index: number, utcOffsetSeconds: number): number[] {
    const value = object.variables(index);

    return [...Array(value.valuesInt64Length())].map((_, i) =>
      new Date((Number(value.valuesInt64(i)) + utcOffsetSeconds) * 1000).getTime()
    );
  }

  private mapWeatherConfigToApiKeys(weatherConfigs: WeatherConfig[] | WeatherConfigs[]): string[] {
    return weatherConfigs.map((weather) => weather.apiKey || '').filter(Boolean);
  }

  private parseRawData(value: number, hasUnit: boolean, key: string): number | string {
    let parsedValue: number | string | undefined = value;

    if (key === 'time' || key === 'sunrise' || key === 'sunset') {
      parsedValue = this.formatDate(parsedValue);
    } else if (hasUnit || key === 'uvIndex') {
      parsedValue = Math.round(parsedValue || 0);
    }

    if (key === 'sunshineDuration' || key === 'daylightDuration') {
      const numberValue = typeof parsedValue === 'number' ? parsedValue : NaN;
      parsedValue = Math.round(numberValue / 3600);
    }

    if (key.includes('visibility')) {
      const numberValue = typeof parsedValue === 'number' ? parsedValue : NaN;
      parsedValue = Math.round(numberValue / 1000);
    }

    if (key === 'weatherCode') {
      const numberValue = typeof parsedValue === 'number' ? parsedValue : NaN;
      parsedValue = WEATHER_CODES[numberValue].de;
    }

    return parsedValue;
  }

  private parseArrayData(
    values: Float32Array | number[],
    hasUnit: boolean,
    key: string
  ): { id: string; value: string | number }[] {
    return Array.from(values).map((value) => ({
      id: uuidV4(),
      value: this.parseRawData(value, hasUnit, key)
    }));
  }

  private formatDate(unixTime?: number): string {
    if (!unixTime) {
      return '';
    }

    const date = new Date(unixTime);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} um ${hours}:${minutes} Uhr`;
  }
}
