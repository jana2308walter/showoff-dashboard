import { ForecastWeatherConfig } from './weather';

export const DAILY_WEATHERS: ForecastWeatherConfig[] = [
  { key: 'sunrise', apiKey: 'sunrise', label: 'Sonnenaufgang' },
  { key: 'sunset', apiKey: 'sunset', label: 'Sonnenuntergang' },
  { key: 'weatherCode', apiKey: 'weather_code', label: 'Wettercode' }, // Code für das Wetter, siehe WeatherCode
  { key: 'uvIndex', apiKey: 'uv_index_max', label: 'Uv-Index' }, // UV-Index nach WHO-Maßstab von 1 bis 11,
  { key: 'temperatureMax', apiKey: 'temperature_2m_max', label: 'Maximale Temperatur', unit: '°C' }, // Maximale Temperatur in Celsius, 2m über Boden
  {
    key: 'temperatureMean',
    apiKey: 'temperature_2m_mean',
    label: 'Durchschnittliche Temperatur',
    unit: '°C'
  }, // Durchschnittliche Temperatur in Celsius, 2m über Boden
  { key: 'temperatureMin', apiKey: 'temperature_2m_min', label: 'Minimale Temperatur', unit: '°C' }, // Minimale Temperatur in Celsius, 2m über Boden
  {
    key: 'apparentTemperatureMax',
    apiKey: 'apparent_temperature_max',
    label: 'Maximal gefühlte Temperatur',
    unit: '°C'
  }, // Maximal gefühlte Temperatur in Celsius, 2m über Boden
  {
    key: 'apparentTemperatureMean',
    apiKey: 'apparent_temperature_mean',
    label: 'Durchschnittlich gefühlte Temperatur',
    unit: '°C'
  }, // Durchschnittlich gefühlte Temperatur in Celsius, 2m über Boden
  {
    key: 'apparentTemperatureMin',
    apiKey: 'apparent_temperature_min',
    label: 'Minimal gefühlte Temperatur',
    unit: '°C'
  }, // Minimal gefühlte Temperatur in Celsius, 2m über Boden
  { key: 'sunshineDuration', apiKey: 'sunshine_duration', label: 'Sonnenschein', unit: 'h' }, // Sonnenschein in Stunden
  { key: 'daylightDuration', apiKey: 'daylight_duration', label: 'Tageslicht', unit: 'h' }, // Tageslicht in Stunden
  {
    key: 'cloudCoverMax',
    apiKey: 'cloud_cover_max',
    label: 'Maximale Wolkenbedeckung',
    unit: '%'
  }, // Maximale Bedeckung durch Wolken und Nebel in %
  {
    key: 'cloudCoverMean',
    apiKey: 'cloud_cover_mean',
    label: 'Durchschnittliche Wolkenbedeckung',
    unit: '%'
  }, // Durchschnittliche Bedeckung durch Wolken in %
  { key: 'cloudCoverMin', apiKey: 'cloud_cover_min', label: 'Minimale Wolkenbedeckung', unit: '%' }, // Minimale Bedeckung durch Wolken in %
  { key: 'precipitationSum', apiKey: 'precipitation_sum', label: 'Niederschlagssumme', unit: 'mm' }, // Niederschlagssumme in mm
  {
    key: 'precipitationHours',
    apiKey: 'precipitation_hours',
    label: 'Niederschlagsstunden',
    unit: 'h'
  }, // Stunden mit Niederschlag in Stunden
  {
    key: 'precipitationProbabilityMax',
    apiKey: 'precipitation_probability_max',
    label: 'Maximale Niederschlagswahrscheinlichkeit',
    unit: '%'
  }, // Maximale Niederschlagswahrscheinlichkeit in %
  {
    key: 'precipitationProbabilityMean',
    apiKey: 'precipitation_probability_mean',
    label: 'Durchschnittliche Niederschlagswahrscheinlichkeit',
    unit: '%'
  }, // Durchschnittliche Niederschlagswahrscheinlichkeit in %
  {
    key: 'precipitationProbabilityMin',
    apiKey: 'precipitation_probability_min',
    label: 'Minimale Niederschlagswahrscheinlichkeit',
    unit: '%'
  }, // Minimale Niederschlagswahrscheinlichkeit in %
  {
    key: 'humidityMax',
    apiKey: 'relative_humidity_2m_max',
    label: 'Maximale Luftfeuchtigkeit',
    unit: '%'
  }, // Maximale Luftfeuchtigkeit in %, 2m über Boden
  {
    key: 'humidityMean',
    apiKey: 'relative_humidity_2m_mean',
    label: 'Durchschnittliche Luftfeuchtigkeit',
    unit: '%'
  }, // Durchschnittliche Luftfeuchtigkeit in %, 2m über Boden
  {
    key: 'humidityMin',
    apiKey: 'relative_humidity_2m_min',
    label: 'Minimale Luftfeuchtigkeit',
    unit: '%'
  }, // Minimale Luftfeuchtigkeit in %, 2m über Boden
  { key: 'pressureMax', apiKey: 'surface_pressure_max', label: 'Maximaler Luftdruck', unit: 'hPa' }, // Maximaler Luftdruck an der Oberfläche in hPa
  {
    key: 'pressureMean',
    apiKey: 'surface_pressure_mean',
    label: 'Durchschnittlicher Luftdruck',
    unit: 'hPa'
  }, // Durchschnittlicher Luftdruck an der Oberfläche in hPa
  { key: 'pressureMin', apiKey: 'surface_pressure_min', label: 'Minimaler Luftdruck', unit: 'hPa' }, // Minimaler Luftdruck an der Oberfläche in hPa
  { key: 'visibilityMax', apiKey: 'visibility_max', label: 'Maximale Sichtweite', unit: 'km' }, // Maximale Sichtweite in km
  {
    key: 'visibilityMean',
    apiKey: 'visibility_mean',
    label: 'Durchschnittliche Sichtweite',
    unit: 'km'
  }, // Durchschnittliche Sichtweite in km
  { key: 'visibilityMin', apiKey: 'visibility_min', label: 'Minimale Sichtweite', unit: 'km' }, // Minimale Sichtweite in km
  {
    key: 'windDirectionDominant',
    apiKey: 'wind_direction_10m_dominant',
    label: 'Dominante Windrichtung',
    unit: '°'
  }, // Dominante Windrichtung in Grad, 10m über Boden
  {
    key: 'windSpeedMax',
    apiKey: 'wind_speed_10m_max',
    label: 'Maximale Windgeschwindigkeit',
    unit: 'km/h'
  }, // Maximale Windgeschwindigkeit in km/h, 10m über Boden
  {
    key: 'windSpeedMean',
    apiKey: 'wind_speed_10m_mean',
    label: 'Durchschnittliche Windgeschwindigkeit',
    unit: 'km/h'
  }, // Durchschnittliche Windgeschwindigkeit in km/h, 10m über Boden
  {
    key: 'windSpeedMin',
    apiKey: 'wind_speed_10m_min',
    label: 'Minimale Windgeschwindigkeit',
    unit: 'km/h'
  }, // Minimale Windgeschwindigkeit in km/h, 10m über Boden
  { key: 'windGustsMax', apiKey: 'wind_gusts_10m_max', label: 'Maximale Windböen', unit: 'km/h' }, // Maximale Geschwindigkeit der Windböen in km/h, 10m über Boden
  {
    key: 'windGustsMean',
    apiKey: 'wind_gusts_10m_mean',
    label: 'Durchschnittliche Windböen',
    unit: 'km/h'
  }, // Durchschnittliche Geschwindigkeit der Windböen in km/h, 10m über Boden
  { key: 'windGustsMin', apiKey: 'wind_gusts_10m_min', label: 'Minimale Windböen', unit: 'km/h' }, // Minimale Geschwindigkeit der Windböen in km/h, 10m über Boden
  { key: 'time', label: 'Datum & Zeit' } // Datum und Uhrzeit
];
