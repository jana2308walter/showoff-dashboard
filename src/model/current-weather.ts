import { CurrentWeatherConfig } from './weather';

export const CURRENT_WEATHER: CurrentWeatherConfig[] = [
  { key: 'temperature', apiKey: 'temperature_2m', label: 'Temperatur', unit: '°C' }, // Temperatur in Celsius, 2m über Boden
  {
    key: 'apparentTemperature',
    apiKey: 'apparent_temperature',
    label: 'Gefühlte Temperatur',
    unit: '°C'
  }, // Gefühlte Temperatur in Celsius (Kombiniert Windkühlung, Sonneneinstrahlung und Luftfeuchtigkeit)
  { key: 'humidity', apiKey: 'relative_humidity_2m', label: 'Luftfeuchtigkeit', unit: '%' }, // Luftfeuchtigkeit in %, 2m über Boden
  {
    key: 'precipitationProbability',
    apiKey: 'precipitation_probability',
    label: 'Niederschlagswahrscheinlichkeit',
    unit: '%'
  }, // Niederschlagswahrscheinlichkeit in %
  { key: 'precipitation', apiKey: 'precipitation', label: 'Niederschlagssumme', unit: 'mm' }, // Niederschlagssumme in mm
  { key: 'weatherCode', apiKey: 'weather_code', label: 'Wettercode' }, // Code für das Wetter, siehe WeatherCode
  { key: 'pressure', apiKey: 'surface_pressure', label: 'Luftdruck', unit: 'hPa' }, // Luftdruck an der Oberfläche in hPa
  {
    key: 'cloudCoverLow',
    apiKey: 'cloud_cover_low',
    label: 'Wolkenbedeckung (Niedrig)',
    unit: '%'
  }, // Bedeckung durch Wolken und Nebel in bis zu 3km Höhe in %
  { key: 'cloudCoverMid', apiKey: 'cloud_cover_mid', label: 'Wolkenbedeckung (Mittel)', unit: '%' }, // Bedeckung durch Wolken in 3km bis 8km Höhe in %
  { key: 'cloudCoverHigh', apiKey: 'cloud_cover_high', label: 'Wolkenbedeckung (Hoch)', unit: '%' }, // Bedeckung durch Wolken ab 8km Höhe in %
  { key: 'visibility', apiKey: 'visibility', label: 'Sichtweite', unit: 'km' }, // Sichtweite in km
  { key: 'windSpeed', apiKey: 'wind_speed_10m', label: 'Windgeschwindigkeit', unit: 'km/h' }, // Windgeschwindigkeit in km/h, 10m über Boden
  { key: 'windDirection', apiKey: 'wind_direction_10m', label: 'Windrichtung', unit: '°' }, // Windrichtung in Grad, 10m über Boden
  { key: 'windGusts', apiKey: 'wind_gusts_10m', label: 'Windböen', unit: 'km/h' }, // Maximale Geschwindigkeit der Windböen in km/h, 10m über Boden
  { key: 'uvIndex', apiKey: 'uv_index', label: 'Uv-Index' }, // UV-Index nach WHO-Maßstab von 1 bis 11,
  { key: 'time', label: 'Datum & Zeit' } // Datum und Uhrzeit
];
