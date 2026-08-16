import { CurrentWeatherConfig } from '../src/model/weather';

const currentWeatherMock: CurrentWeatherConfig[] = [
  {
    key: 'temperature',
    apiKey: 'temperature_2m',
    label: 'Temperatur',
    unit: '°C',
    value: 15
  },
  {
    key: 'apparentTemperature',
    apiKey: 'apparent_temperature',
    label: 'Gefühlte Temperatur',
    unit: '°C',
    value: 13
  },
  {
    key: 'humidity',
    apiKey: 'relative_humidity_2m',
    label: 'Luftfeuchtigkeit',
    unit: '%',
    value: 87
  },
  {
    key: 'precipitationProbability',
    apiKey: 'precipitation_probability',
    label: 'Niederschlag',
    unit: '%',
    value: 100
  },
  {
    key: 'precipitation',
    apiKey: 'precipitation',
    label: 'Summe',
    unit: 'mm',
    value: 0
  },
  {
    key: 'weatherCode',
    apiKey: 'weather_code',
    label: 'Wettercode',
    value: 'Leichter Regen'
  },
  {
    key: 'pressure',
    apiKey: 'surface_pressure',
    label: 'Luftdruck',
    unit: 'hPa',
    value: 972
  },
  {
    key: 'cloudCoverLow',
    apiKey: 'cloud_cover_low',
    label: 'Wolken (Niedrig)',
    unit: '%',
    value: 46
  },
  {
    key: 'cloudCoverMid',
    apiKey: 'cloud_cover_mid',
    label: 'Wolken (Mittel)',
    unit: '%',
    value: 100
  },
  {
    key: 'cloudCoverHigh',
    apiKey: 'cloud_cover_high',
    label: 'Wolken (Hoch)',
    unit: '%',
    value: 100
  },
  {
    key: 'visibility',
    apiKey: 'visibility',
    label: 'Sichtweite',
    unit: 'km',
    value: 12
  },
  {
    key: 'windSpeed',
    apiKey: 'wind_speed_10m',
    label: 'Wind',
    unit: 'km/h',
    value: 19
  },
  {
    key: 'windDirection',
    apiKey: 'wind_direction_10m',
    label: 'Windrichtung',
    unit: '°',
    value: 202
  },
  {
    key: 'windGusts',
    apiKey: 'wind_gusts_10m',
    label: 'Böen',
    unit: 'km/h',
    value: 46
  },
  {
    key: 'uvIndex',
    apiKey: 'uv_index',
    label: 'Uv-Index',
    value: 1
  },
  {
    key: 'time',
    label: 'Datum & Zeit',
    value: '04.06.2026 um 16:30 Uhr'
  }
];
