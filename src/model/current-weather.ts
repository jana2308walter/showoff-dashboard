export const CURRENT_WEATHER_VALUES = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'precipitation_probability',
  'precipitation',
  'weather_code',
  'surface_pressure',
  'cloud_cover_low',
  'cloud_cover_mid',
  'cloud_cover_high',
  'visibility',
  'wind_speed_10m',
  'wind_direction_10m',
  'wind_gusts_10m',
  'uv_index'
];

export interface CurrentWeather {
  temperature: number; // Temperatur in Celsius, 2m über Boden
  apparentTemperature: number; // Gefühlte Temperatur in Celsius (Kombiniert Windkühlung, Sonneneinstrahlung und Luftfeuchtigkeit)
  humidity: number; // Luftfeuchtigkeit in %, 2m über Boden
  precipitationProbability: number; // Niederschlagswahrscheinlichkeit in %
  precipitation: number; // Niederschlagssumme in mm
  weatherCode: number; // Code für das Wetter, siehe WeatherCode
  pressure: number; // Luftdruck an der Oberfläche in hPa
  cloudCoverLow: number; // Bedeckung durch Wolken und Nebel in bis zu 3km Höhe in %
  cloudCoverMid: number; // Bedeckung durch Wolken in 3km bis 8km Höhe in %
  cloudCoverHigh: number; // Bedeckung durch Wolken ab 8km Höhe in %
  visibility: number; // Sichtweite in m
  windSpeed: number; // Windgeschwindigkeit in km/h, 10m über Boden
  windDirection: number; // Windrichtung in Grad, 10m über Boden
  windGusts: number; // Maximale Geschwindigkeit der Windböen in km/h, 10m über Boden
  uvIndex: number; // UV-Index nach WHO-Maßstab von 1 bis 11
}

export type CurrentWeatherWithTime = CurrentWeather & { time: Date };

export const currentUnits: {
  key: keyof CurrentWeatherWithTime;
  unit: string;
}[] = [
  { key: 'time', unit: '' },
  { key: 'temperature', unit: '°C' },
  { key: 'apparentTemperature', unit: '°C' },
  { key: 'humidity', unit: '%' },
  { key: 'precipitationProbability', unit: '%' },
  { key: 'precipitation', unit: 'mm' },
  { key: 'weatherCode', unit: '' },
  { key: 'pressure', unit: 'hPa' },
  { key: 'cloudCoverLow', unit: '%' },
  { key: 'cloudCoverMid', unit: '%' },
  { key: 'cloudCoverHigh', unit: '%' },
  { key: 'visibility', unit: 'm' },
  { key: 'windSpeed', unit: 'km/h' },
  { key: 'windDirection', unit: '°' },
  { key: 'windGusts', unit: 'km/h' },
  { key: 'uvIndex', unit: '' }
];

export const INITIAL_CURRENT_WEATHER: CurrentWeather = {
  temperature: NaN,
  apparentTemperature: NaN,
  humidity: NaN,
  precipitationProbability: NaN,
  precipitation: NaN,
  weatherCode: NaN,
  pressure: NaN,
  cloudCoverLow: NaN,
  cloudCoverMid: NaN,
  cloudCoverHigh: NaN,
  visibility: NaN,
  windSpeed: NaN,
  windDirection: NaN,
  windGusts: NaN,
  uvIndex: NaN
};

export const currentWeatherMapping: {
  key: keyof CurrentWeather;
  index: number;
}[] = [
  { key: 'temperature', index: 0 },
  { key: 'apparentTemperature', index: 1 },
  { key: 'humidity', index: 2 },
  { key: 'precipitationProbability', index: 3 },
  { key: 'precipitation', index: 4 },
  { key: 'weatherCode', index: 5 },
  { key: 'pressure', index: 6 },
  { key: 'cloudCoverLow', index: 7 },
  { key: 'cloudCoverMid', index: 8 },
  { key: 'cloudCoverHigh', index: 9 },
  { key: 'visibility', index: 10 },
  { key: 'windSpeed', index: 11 },
  { key: 'windDirection', index: 12 },
  { key: 'windGusts', index: 13 },
  { key: 'uvIndex', index: 14 }
];
