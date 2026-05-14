/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CURRENT_WEATHER_VALUES,
  CurrentWeather,
  currentWeatherMapping,
  CurrentWeatherWithTime,
  INITIAL_CURRENT_WEATHER
} from './current-weather';
import {
  HOURLY_WEATHER_VALUES,
  HourlyWeather,
  hourlyWeatherMapping,
  HourlyWeatherWithTimes,
  INITIAL_HOURLY_WEATHER
} from './hourly-weather';
import {
  DAILY_WEATHER_VALUES,
  DailySun,
  dailySunMapping,
  DailyWeather,
  dailyWeatherMapping,
  DailyWeatherWithTimes,
  INITIAL_DAILY_SUN,
  INITIAL_DAILY_WEATHER
} from './daily-weather';
import { fetchWeatherApi } from 'openmeteo';
import { Injectable, resource, signal } from '@angular/core';
import { Coordinates, Weather } from './weather';

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
    params: () => this.$coordinates(),
    loader: async ({ params }) => {
      return await this.getWeatherData(params.latitude, params.longitude);
    }
  }).asReadonly();

  private readonly range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  private async getWeatherData(latitude: number, longitude: number): Promise<Weather> {
    const params = {
      latitude: [latitude],
      longitude: [longitude],
      current: CURRENT_WEATHER_VALUES,
      hourly: HOURLY_WEATHER_VALUES,
      daily: DAILY_WEATHER_VALUES
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

  private getCurrentWeather(current: any, utcOffsetSeconds: number): CurrentWeatherWithTime | null {
    if (!current) {
      return null;
    }

    const time = new Date((Number(current.time()) + utcOffsetSeconds) * 1000);
    const result: CurrentWeather = INITIAL_CURRENT_WEATHER;

    for (const item of currentWeatherMapping) {
      result[item.key] = this.getValue(current, item.index);
    }

    return { time, ...result };
  }

  private getHourlyWeather(hourly: any, utcOffsetSeconds: number): HourlyWeatherWithTimes | null {
    if (!hourly) {
      return null;
    }

    const times = this.range(
      Number(hourly.time()),
      Number(hourly.timeEnd()),
      hourly.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000));

    const result: HourlyWeather = INITIAL_HOURLY_WEATHER;

    for (const item of hourlyWeatherMapping) {
      result[item.key] = this.getValueArray(hourly, item.index);
    }

    return { times, ...result };
  }

  private getDailyWeather(daily: any, utcOffsetSeconds: number): DailyWeatherWithTimes | null {
    if (!daily) {
      return null;
    }

    const times = this.range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
      (t) => new Date((t + utcOffsetSeconds) * 1000)
    );

    const weatherResult: DailyWeather = INITIAL_DAILY_WEATHER;

    for (const item of dailyWeatherMapping) {
      weatherResult[item.key] = this.getValueArray(daily, item.index);
    }

    const sunResult: DailySun = INITIAL_DAILY_SUN;

    for (const item of dailySunMapping) {
      sunResult[item.key] = this.getDateArray(daily, item.index, utcOffsetSeconds);
    }

    return { times, ...weatherResult, ...sunResult };
  }

  private getValue(object: any, index: number): number {
    return object.variables(index)?.value();
  }

  private getValueArray(object: any, index: number): number[] {
    return object.variables(index)?.valuesArray();
  }

  private getDateArray(object: any, index: number, utcOffsetSeconds: number): Date[] {
    const value = object.variables(index);

    return [...Array(value.valuesInt64Length())].map(
      (_, i) => new Date((Number(value.valuesInt64(i)) + utcOffsetSeconds) * 1000)
    );
  }
}
