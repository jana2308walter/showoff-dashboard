export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Weather {
  current: CurrentWeatherConfig[];
  hourly: ForecastWeatherConfig[];
  daily: ForecastWeatherConfig[];
}

export type CurrentWeatherConfig = WeatherConfig<string | number>;

export type ForecastWeatherConfig = WeatherConfig<{ id: string; value: string | number }[]>;

export interface WeatherConfig<T> {
  key: WeatherKey;
  apiKey?: string;
  label: string;
  unit?: string;
  value?: T;
}

export type StringCurrentWeatherConfig = StringWeatherConfig<string>;

export type StringForecastWeatherConfig = StringWeatherConfig<{ id: string; value: string }[]>;

export interface StringWeatherConfig<T> {
  key: WeatherKey;
  label: string;
  unit: string;
  value: T;
}

export type WeatherKey =
  | 'apparentTemperature'
  | 'apparentTemperatureMax'
  | 'apparentTemperatureMean'
  | 'apparentTemperatureMin'
  | 'cloudCoverHigh'
  | 'cloudCoverLow'
  | 'cloudCoverMax'
  | 'cloudCoverMean'
  | 'cloudCoverMid'
  | 'cloudCoverMin'
  | 'daylightDuration'
  | 'humidity'
  | 'humidityMax'
  | 'humidityMean'
  | 'humidityMin'
  | 'precipitation'
  | 'precipitationHours'
  | 'precipitationProbability'
  | 'precipitationProbabilityMax'
  | 'precipitationProbabilityMean'
  | 'precipitationProbabilityMin'
  | 'precipitationSum'
  | 'pressure'
  | 'pressureMax'
  | 'pressureMean'
  | 'pressureMin'
  | 'sunrise'
  | 'sunset'
  | 'sunshineDuration'
  | 'temperature'
  | 'temperatureMax'
  | 'temperatureMean'
  | 'temperatureMin'
  | 'time'
  | 'uvIndex'
  | 'visibility'
  | 'visibilityMax'
  | 'visibilityMean'
  | 'visibilityMin'
  | 'weatherCode'
  | 'windDirection'
  | 'windDirectionDominant'
  | 'windGusts'
  | 'windGustsMax'
  | 'windGustsMean'
  | 'windGustsMin'
  | 'windSpeed'
  | 'windSpeedMax'
  | 'windSpeedMean'
  | 'windSpeedMin';
