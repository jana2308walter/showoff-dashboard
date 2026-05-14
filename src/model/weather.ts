import { CurrentWeatherWithTime } from './current-weather';
import { DailyWeatherWithTimes } from './daily-weather';
import { HourlyWeatherWithTimes } from './hourly-weather';

export interface Weather {
  current: CurrentWeatherWithTime | null;
  hourly: HourlyWeatherWithTimes | null;
  daily: DailyWeatherWithTimes | null;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

/*
WMO Weather interpretation codes (WW)
Code	Description
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
 */
