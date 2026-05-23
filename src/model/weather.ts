import { CurrentWeather } from './current-weather';
import { DailyWeatherWithTimes } from './daily-weather';
import { HourlyWeatherWithTimes } from './hourly-weather';

export interface Weather {
  current: CurrentWeather[] | null;
  hourly: HourlyWeatherWithTimes | null;
  daily: DailyWeatherWithTimes | null;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

interface WeatherCodeText {
  de: string;
  en: string;
}

export const WEATHER_CODES: Record<number, WeatherCodeText> = {
  0: { de: 'Klarer Himmel', en: 'Clear sky' },
  1: { de: 'Überwiegend klar', en: 'Mainly clear' },
  2: { de: 'Teilweise bewölkt', en: 'Partly cloudy' },
  3: { de: 'Bedeckt', en: 'Overcast' },
  45: { de: 'Nebel', en: 'Fog' },
  48: { de: 'Raureifnebel', en: 'Depositing rime fog' },
  51: { de: 'Leichter Nieselregen', en: 'Light drizzle' },
  53: { de: 'Mäßiger Nieselregen', en: 'Moderate drizzle' },
  55: { de: 'Starker Nieselregen', en: 'Dense drizzle' },
  56: { de: 'Leichter gefrierender Nieselregen', en: 'Light freezing drizzle' },
  57: { de: 'Starker gefrierender Nieselregen', en: 'Dense freezing drizzle' },
  61: { de: 'Leichter Regen', en: 'Slight rain' },
  63: { de: 'Mäßiger Regen', en: 'Moderate rain' },
  65: { de: 'Starker Regen', en: 'Heavy rain' },
  66: { de: 'Leichter gefrierender Regen', en: 'Light freezing rain' },
  67: { de: 'Starker gefrierender Regen', en: 'Heavy freezing rain' },
  71: { de: 'Leichter Schneefall', en: 'Slight snow fall' },
  73: { de: 'Mäßiger Schneefall', en: 'Moderate snow fall' },
  75: { de: 'Starker Schneefall', en: 'Heavy snow fall' },
  77: { de: 'Schneegriesel', en: 'Snow grains' },
  80: { de: 'Leichte Regenschauer', en: 'Slight rain showers' },
  81: { de: 'Mäßige Regenschauer', en: 'Moderate rain showers' },
  82: { de: 'Starke Regenschauer', en: 'Violent rain showers' },
  85: { de: 'Leichte Schneeschauer', en: 'Slight snow showers' },
  86: { de: 'Starke Schneeschauer', en: 'Heavy snow showers' },
  95: { de: 'Gewitter', en: 'Thunderstorm' },
  96: { de: 'Gewitter mit leichtem Hagel', en: 'Thunderstorm with slight hail' },
  99: { de: 'Gewitter mit starkem Hagel', en: 'Thunderstorm with heavy hail' }
};
