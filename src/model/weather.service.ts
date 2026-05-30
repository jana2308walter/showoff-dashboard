/* eslint-disable @typescript-eslint/no-explicit-any */
import { HOURLY_WEATHERS } from './hourly-weather';
import { DAILY_WEATHERS } from './daily-weather';
import { fetchWeatherApi } from 'openmeteo';
import { Injectable, resource, signal } from '@angular/core';
import { Coordinates, Weather, WeatherConfig, WeatherConfigs } from './weather';
import { CURRENT_WEATHER } from './current-weather';

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

      return {
        ...item,
        value: isTimeItem ? time : this.getValue(current, index)
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

      return {
        ...item,
        values
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

      return {
        ...item,
        values
      } as WeatherConfigs;
    });
  }

  private getValue(object: any, index: number): number {
    return object.variables(index)?.value();
  }

  private getValueArray(object: any, index: number): number[] {
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
}
