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

export interface Weather {
  current: CurrentWeatherWithTime | null;
  hourly: HourlyWeatherWithTimes | null;
  daily: DailyWeatherWithTimes | null;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export async function getWeatherData(latitude: number, longitude: number): Promise<Weather> {
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
  const current = getCurrentWeather(response.current(), utcOffsetSeconds);
  const hourly = getHourlyWeather(response.hourly(), utcOffsetSeconds);
  const daily = getDailyWeather(response.daily(), utcOffsetSeconds);

  return {
    current,
    hourly,
    daily
  };
}

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getValue(object: any, index: number): number {
  return object.variables(index)?.value();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getValueArray(object: any, index: number): number[] {
  return object.variables(index)?.valuesArray();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDateArray(object: any, index: number, utcOffsetSeconds: number): Date[] {
  const value = object.variables(index);

  return [...Array(value.valuesInt64Length())].map(
    (_, i) => new Date((Number(value.valuesInt64(i)) + utcOffsetSeconds) * 1000)
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCurrentWeather(current: any, utcOffsetSeconds: number): CurrentWeatherWithTime | null {
  if (!current) {
    return null;
  }

  const time = new Date((Number(current.time()) + utcOffsetSeconds) * 1000);
  const result: CurrentWeather = INITIAL_CURRENT_WEATHER;

  for (const item of currentWeatherMapping) {
    result[item.key] = getValue(current, item.index);
  }

  return { time, ...result };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getHourlyWeather(hourly: any, utcOffsetSeconds: number): HourlyWeatherWithTimes | null {
  if (!hourly) {
    return null;
  }

  const times = range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
    (t) => new Date((t + utcOffsetSeconds) * 1000)
  );

  const result: HourlyWeather = INITIAL_HOURLY_WEATHER;

  for (const item of hourlyWeatherMapping) {
    result[item.key] = getValueArray(hourly, item.index);
  }

  return { times, ...result };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDailyWeather(daily: any, utcOffsetSeconds: number): DailyWeatherWithTimes | null {
  if (!daily) {
    return null;
  }

  const times = range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
    (t) => new Date((t + utcOffsetSeconds) * 1000)
  );

  const weatherResult: DailyWeather = INITIAL_DAILY_WEATHER;

  for (const item of dailyWeatherMapping) {
    weatherResult[item.key] = getValueArray(daily, item.index);
  }

  const sunResult: DailySun = INITIAL_DAILY_SUN;

  for (const item of dailySunMapping) {
    sunResult[item.key] = getDateArray(daily, item.index, utcOffsetSeconds);
  }

  return { times, ...weatherResult, ...sunResult };
}
