import { WeatherKey } from './weather';
import { WEATHER_CODES } from './weather-code';

export const weatherParsers: Partial<
  Record<WeatherKey, (value?: number | string) => string | number>
> = {
  daylightDuration: (value) => Math.round(Number(value) / 3600),
  sunrise: (value) => formatDate(Number(value)),
  sunset: (value) => formatDate(Number(value)),
  sunshineDuration: (value) => Math.round(Number(value) / 3600),
  time: (value) => formatDate(Number(value)),
  uvIndex: (value) => Math.round(Number(value)),
  visibility: (value) => Math.round(Number(value) / 1000),
  visibilityMax: (value) => Math.round(Number(value) / 1000),
  visibilityMean: (value) => Math.round(Number(value) / 1000),
  visibilityMin: (value) => Math.round(Number(value) / 1000),
  weatherCode: (value) => WEATHER_CODES[Number(value)]?.de ?? 'Unbekannt'
};

function formatDate(unixTime?: number): string {
  if (!unixTime) {
    return '';
  }

  const date = new Date(unixTime);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year} um ${hours}:${minutes} Uhr`;
}
