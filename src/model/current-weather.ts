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
  key: string;
  label: string;
  unit?: string;
  value?: number;
}

export const CURRENT_WEATHER_CONFIG: CurrentWeather[] = [
  { key: 'temperature', label: 'Temperatur', unit: '°C' }, // Temperatur in Celsius, 2m über Boden
  { key: 'apparentTemperature', label: 'Gefühlte Temperatur', unit: '°C' }, // Gefühlte Temperatur in Celsius (Kombiniert Windkühlung, Sonneneinstrahlung und Luftfeuchtigkeit)
  { key: 'humidity', label: 'Luftfeuchtigkeit', unit: '%' }, // Luftfeuchtigkeit in %, 2m über Boden
  { key: 'precipitationProbability', label: 'Niederschlagswahrscheinlichkeit', unit: '%' }, // Niederschlagswahrscheinlichkeit in %
  { key: 'precipitation', label: 'Niederschlagssumme', unit: 'mm' }, // Niederschlagssumme in mm
  { key: 'weatherCode', label: 'Wettercode' }, // Code für das Wetter, siehe WeatherCode
  { key: 'pressure', label: 'Luftdruck', unit: 'hPa' }, // Luftdruck an der Oberfläche in hPa
  { key: 'cloudCoverLow', label: 'Wolkenbedeckung (Niedrig)', unit: '%' }, // Bedeckung durch Wolken und Nebel in bis zu 3km Höhe in %
  { key: 'cloudCoverMid', label: 'Wolkenbedeckung (Mittel)', unit: '%' }, // Bedeckung durch Wolken in 3km bis 8km Höhe in %
  { key: 'cloudCoverHigh', label: 'Wolkenbedeckung (Hoch)', unit: '%' }, // Bedeckung durch Wolken ab 8km Höhe in %
  { key: 'visibility', label: 'Sichtweite', unit: 'm' }, // Sichtweite in m
  { key: 'windSpeed', label: 'Windgeschwindigkeit', unit: 'km/h' }, // Windgeschwindigkeit in km/h, 10m über Boden
  { key: 'windDirection', label: 'Windrichtung', unit: '°' }, // Windrichtung in Grad, 10m über Boden
  { key: 'windGusts', label: 'Windböen', unit: 'km/h' }, // Maximale Geschwindigkeit der Windböen in km/h, 10m über Boden
  { key: 'uvIndex', label: 'Uv-Index' }, // UV-Index nach WHO-Maßstab von 1 bis 11,
  { key: 'time', label: 'Datum & Zeit' } // Datum und Uhrzeit
];
