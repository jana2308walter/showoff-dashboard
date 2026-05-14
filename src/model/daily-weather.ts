export const DAILY_WEATHER_VALUES = [
  'sunrise',
  'sunset',
  'weather_code',
  'uv_index_max',
  'temperature_2m_max',
  'temperature_2m_min',
  'temperature_2m_mean',
  'apparent_temperature_max',
  'apparent_temperature_min',
  'apparent_temperature_mean',
  'sunshine_duration',
  'daylight_duration',
  'cloud_cover_max',
  'cloud_cover_min',
  'cloud_cover_mean',
  'precipitation_sum',
  'precipitation_hours',
  'precipitation_probability_max',
  'precipitation_probability_min',
  'precipitation_probability_mean',
  'relative_humidity_2m_max',
  'relative_humidity_2m_min',
  'relative_humidity_2m_mean',
  'surface_pressure_max',
  'surface_pressure_min',
  'surface_pressure_mean',
  'visibility_max',
  'visibility_min',
  'visibility_mean',
  'wind_direction_10m_dominant',
  'wind_speed_10m_max',
  'wind_speed_10m_min',
  'wind_speed_10m_mean',
  'wind_gusts_10m_max',
  'wind_gusts_10m_min',
  'wind_gusts_10m_mean'
];

export interface DailySun {
  sunrise: Date[];
  sunset: Date[];
}

export interface DailyWeather {
  weatherCode: number[];
  uvIndex: number[];
  temperatureMax: number[];
  temperatureMin: number[];
  temperatureMean: number[];
  apparentTemperatureMax: number[];
  apparentTemperatureMin: number[];
  apparentTemperatureMean: number[];
  sunshineDuration: number[];
  daylightDuration: number[];
  cloudCoverMax: number[];
  cloudCoverMin: number[];
  cloudCoverMean: number[];
  precipitationSum: number[];
  precipitationHours: number[];
  precipitationProbabilityMax: number[];
  precipitationProbabilityMin: number[];
  precipitationProbabilityMean: number[];
  humidityMax: number[];
  humidityMin: number[];
  humidityMean: number[];
  pressureMax: number[];
  pressureMin: number[];
  pressureMean: number[];
  visibilityMax: number[];
  visibilityMin: number[];
  visibilityMean: number[];
  windDirection: number[];
  windSpeedMax: number[];
  windSpeedMin: number[];
  windSpeedMean: number[];
  windGustsMax: number[];
  windGustsMin: number[];
  windGustsMean: number[];
}

export type DailyWeatherWithTimes = DailySun & DailyWeather & { times: Date[] };

export const dailyUnits: {
  key: keyof DailyWeatherWithTimes;
  unit: string;
}[] = [
  { key: 'times', unit: '' },
  { key: 'sunrise', unit: '' },
  { key: 'sunset', unit: '' },
  { key: 'weatherCode', unit: '' },
  { key: 'uvIndex', unit: '' },
  { key: 'temperatureMax', unit: '°C' },
  { key: 'temperatureMin', unit: '°C' },
  { key: 'temperatureMean', unit: '°C' },
  { key: 'apparentTemperatureMax', unit: '°C' },
  { key: 'apparentTemperatureMin', unit: '°C' },
  { key: 'apparentTemperatureMean', unit: '°C' },
  { key: 'sunshineDuration', unit: 's' },
  { key: 'daylightDuration', unit: 's' },
  { key: 'cloudCoverMax', unit: '%' },
  { key: 'cloudCoverMin', unit: '%' },
  { key: 'cloudCoverMean', unit: '%' },
  { key: 'precipitationSum', unit: 'mm' },
  { key: 'precipitationHours', unit: 'h' },
  { key: 'precipitationProbabilityMax', unit: '%' },
  { key: 'precipitationProbabilityMin', unit: '%' },
  { key: 'precipitationProbabilityMean', unit: '%' },
  { key: 'humidityMax', unit: '%' },
  { key: 'humidityMin', unit: '%' },
  { key: 'humidityMean', unit: '%' },
  { key: 'pressureMax', unit: 'hPa' },
  { key: 'pressureMin', unit: 'hPa' },
  { key: 'pressureMean', unit: 'hPa' },
  { key: 'visibilityMax', unit: 'm' },
  { key: 'visibilityMin', unit: 'm' },
  { key: 'visibilityMean', unit: 'm' },
  { key: 'windDirection', unit: '°' },
  { key: 'windSpeedMax', unit: 'km/h' },
  { key: 'windSpeedMin', unit: 'km/h' },
  { key: 'windSpeedMean', unit: 'km/h' },
  { key: 'windGustsMax', unit: 'km/h' },
  { key: 'windGustsMin', unit: 'km/h' },
  { key: 'windGustsMean', unit: 'km/h' }
];

export const INITIAL_DAILY_SUN: DailySun = {
  sunrise: [],
  sunset: []
};

export const INITIAL_DAILY_WEATHER: DailyWeather = {
  weatherCode: [],
  uvIndex: [],
  temperatureMax: [],
  temperatureMin: [],
  temperatureMean: [],
  apparentTemperatureMax: [],
  apparentTemperatureMin: [],
  apparentTemperatureMean: [],
  sunshineDuration: [],
  daylightDuration: [],
  cloudCoverMax: [],
  cloudCoverMin: [],
  cloudCoverMean: [],
  precipitationSum: [],
  precipitationHours: [],
  precipitationProbabilityMax: [],
  precipitationProbabilityMin: [],
  precipitationProbabilityMean: [],
  humidityMax: [],
  humidityMin: [],
  humidityMean: [],
  pressureMax: [],
  pressureMin: [],
  pressureMean: [],
  visibilityMax: [],
  visibilityMin: [],
  visibilityMean: [],
  windDirection: [],
  windSpeedMax: [],
  windSpeedMin: [],
  windSpeedMean: [],
  windGustsMax: [],
  windGustsMin: [],
  windGustsMean: []
};

export const dailySunMapping: {
  key: keyof DailySun;
  index: number;
}[] = [
  { key: 'sunrise', index: 0 },
  { key: 'sunset', index: 1 }
];

export const dailyWeatherMapping: {
  key: keyof DailyWeather;
  index: number;
}[] = [
  { key: 'weatherCode', index: 3 },
  { key: 'uvIndex', index: 4 },
  { key: 'temperatureMax', index: 5 },
  { key: 'temperatureMin', index: 6 },
  { key: 'temperatureMean', index: 7 },
  { key: 'apparentTemperatureMax', index: 8 },
  { key: 'apparentTemperatureMin', index: 9 },
  { key: 'apparentTemperatureMean', index: 10 },
  { key: 'sunshineDuration', index: 11 },
  { key: 'daylightDuration', index: 12 },
  { key: 'cloudCoverMax', index: 13 },
  { key: 'cloudCoverMin', index: 14 },
  { key: 'cloudCoverMean', index: 15 },
  { key: 'precipitationSum', index: 16 },
  { key: 'precipitationHours', index: 17 },
  { key: 'precipitationProbabilityMax', index: 18 },
  { key: 'precipitationProbabilityMin', index: 19 },
  { key: 'precipitationProbabilityMean', index: 20 },
  { key: 'humidityMax', index: 21 },
  { key: 'humidityMin', index: 22 },
  { key: 'humidityMean', index: 23 },
  { key: 'pressureMax', index: 24 },
  { key: 'pressureMin', index: 25 },
  { key: 'pressureMean', index: 26 },
  { key: 'visibilityMax', index: 27 },
  { key: 'visibilityMin', index: 28 },
  { key: 'visibilityMean', index: 29 },
  { key: 'windDirection', index: 30 },
  { key: 'windSpeedMax', index: 31 },
  { key: 'windSpeedMin', index: 32 },
  { key: 'windSpeedMean', index: 33 },
  { key: 'windGustsMax', index: 34 },
  { key: 'windGustsMin', index: 35 },
  { key: 'windGustsMean', index: 36 }
];
