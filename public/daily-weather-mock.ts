import { ForecastWeatherConfig } from '../src/model/weather';

const dailyWeatherMock: ForecastWeatherConfig[] = [
  {
    key: 'sunrise',
    apiKey: 'sunrise',
    label: 'Sonnenaufgang',
    value: [
      {
        id: 'sunrise-0',
        value: '04.06.2026 um 05:32 Uhr'
      },
      {
        id: 'sunrise-1',
        value: '05.06.2026 um 05:31 Uhr'
      },
      {
        id: 'sunrise-2',
        value: '06.06.2026 um 05:31 Uhr'
      },
      {
        id: 'sunrise-3',
        value: '07.06.2026 um 05:30 Uhr'
      },
      {
        id: 'sunrise-4',
        value: '08.06.2026 um 05:30 Uhr'
      },
      {
        id: 'sunrise-5',
        value: '09.06.2026 um 05:30 Uhr'
      },
      {
        id: 'sunrise-6',
        value: '10.06.2026 um 05:29 Uhr'
      }
    ]
  },
  {
    key: 'sunset',
    apiKey: 'sunset',
    label: 'Sonnenuntergang',
    value: [
      {
        id: 'sunset-0',
        value: '04.06.2026 um 21:22 Uhr'
      },
      {
        id: 'sunset-1',
        value: '05.06.2026 um 21:23 Uhr'
      },
      {
        id: 'sunset-2',
        value: '06.06.2026 um 21:23 Uhr'
      },
      {
        id: 'sunset-3',
        value: '07.06.2026 um 21:24 Uhr'
      },
      {
        id: 'sunset-4',
        value: '08.06.2026 um 21:25 Uhr'
      },
      {
        id: 'sunset-5',
        value: '09.06.2026 um 21:26 Uhr'
      },
      {
        id: 'sunset-6',
        value: '10.06.2026 um 21:26 Uhr'
      }
    ]
  },
  {
    key: 'weatherCode',
    apiKey: 'weather_code',
    label: 'Wettercode',
    value: [
      {
        id: 'weatherCode-0',
        value: 'Leichter Regen'
      },
      {
        id: 'weatherCode-1',
        value: 'Leichter Regen'
      },
      {
        id: 'weatherCode-2',
        value: 'Leichter Regen'
      },
      {
        id: 'weatherCode-3',
        value: 'Bedeckt'
      },
      {
        id: 'weatherCode-4',
        value: 'Leichte Regenschauer'
      },
      {
        id: 'weatherCode-5',
        value: 'Leichte Regenschauer'
      },
      {
        id: 'weatherCode-6',
        value: 'Bedeckt'
      }
    ]
  },
  {
    key: 'uvIndex',
    apiKey: 'uv_index_max',
    label: 'Uv-Index',
    value: [
      {
        id: 'uvIndex-0',
        value: 5
      },
      {
        id: 'uvIndex-1',
        value: 7
      },
      {
        id: 'uvIndex-2',
        value: 7
      },
      {
        id: 'uvIndex-3',
        value: 6
      },
      {
        id: 'uvIndex-4',
        value: 7
      },
      {
        id: 'uvIndex-5',
        value: 5
      },
      {
        id: 'uvIndex-6',
        value: 7
      }
    ]
  },
  {
    key: 'temperatureMax',
    apiKey: 'temperature_2m_max',
    label: 'Maximale Temperatur',
    unit: '°C',
    value: [
      {
        id: 'temperatureMax-0',
        value: 19
      },
      {
        id: 'temperatureMax-1',
        value: 19
      },
      {
        id: 'temperatureMax-2',
        value: 21
      },
      {
        id: 'temperatureMax-3',
        value: 22
      },
      {
        id: 'temperatureMax-4',
        value: 27
      },
      {
        id: 'temperatureMax-5',
        value: 19
      },
      {
        id: 'temperatureMax-6',
        value: 20
      }
    ]
  },
  {
    key: 'temperatureMean',
    apiKey: 'temperature_2m_mean',
    label: 'Durchschnittliche Temperatur',
    unit: '°C',
    value: [
      {
        id: 'temperatureMean-0',
        value: 16
      },
      {
        id: 'temperatureMean-1',
        value: 16
      },
      {
        id: 'temperatureMean-2',
        value: 16
      },
      {
        id: 'temperatureMean-3',
        value: 17
      },
      {
        id: 'temperatureMean-4',
        value: 20
      },
      {
        id: 'temperatureMean-5',
        value: 16
      },
      {
        id: 'temperatureMean-6',
        value: 15
      }
    ]
  },
  {
    key: 'temperatureMin',
    apiKey: 'temperature_2m_min',
    label: 'Minimale Temperatur',
    unit: '°C',
    value: [
      {
        id: 'temperatureMin-0',
        value: 14
      },
      {
        id: 'temperatureMin-1',
        value: 13
      },
      {
        id: 'temperatureMin-2',
        value: 12
      },
      {
        id: 'temperatureMin-3',
        value: 13
      },
      {
        id: 'temperatureMin-4',
        value: 12
      },
      {
        id: 'temperatureMin-5',
        value: 13
      },
      {
        id: 'temperatureMin-6',
        value: 10
      }
    ]
  },
  {
    key: 'apparentTemperatureMax',
    apiKey: 'apparent_temperature_max',
    label: 'Maximal gefühlte Temperatur',
    unit: '°C',
    value: [
      {
        id: 'apparentTemperatureMax-0',
        value: 16
      },
      {
        id: 'apparentTemperatureMax-1',
        value: 17
      },
      {
        id: 'apparentTemperatureMax-2',
        value: 20
      },
      {
        id: 'apparentTemperatureMax-3',
        value: 21
      },
      {
        id: 'apparentTemperatureMax-4',
        value: 29
      },
      {
        id: 'apparentTemperatureMax-5',
        value: 18
      },
      {
        id: 'apparentTemperatureMax-6',
        value: 20
      }
    ]
  },
  {
    key: 'apparentTemperatureMean',
    apiKey: 'apparent_temperature_mean',
    label: 'Durchschnittlich gefühlte Temperatur',
    unit: '°C',
    value: [
      {
        id: 'apparentTemperatureMean-0',
        value: 14
      },
      {
        id: 'apparentTemperatureMean-1',
        value: 14
      },
      {
        id: 'apparentTemperatureMean-2',
        value: 15
      },
      {
        id: 'apparentTemperatureMean-3',
        value: 16
      },
      {
        id: 'apparentTemperatureMean-4',
        value: 20
      },
      {
        id: 'apparentTemperatureMean-5',
        value: 16
      },
      {
        id: 'apparentTemperatureMean-6',
        value: 14
      }
    ]
  },
  {
    key: 'apparentTemperatureMin',
    apiKey: 'apparent_temperature_min',
    label: 'Minimal gefühlte Temperatur',
    unit: '°C',
    value: [
      {
        id: 'apparentTemperatureMin-0',
        value: 11
      },
      {
        id: 'apparentTemperatureMin-1',
        value: 10
      },
      {
        id: 'apparentTemperatureMin-2',
        value: 10
      },
      {
        id: 'apparentTemperatureMin-3',
        value: 12
      },
      {
        id: 'apparentTemperatureMin-4',
        value: 10
      },
      {
        id: 'apparentTemperatureMin-5',
        value: 13
      },
      {
        id: 'apparentTemperatureMin-6',
        value: 9
      }
    ]
  },
  {
    key: 'sunshineDuration',
    apiKey: 'sunshine_duration',
    label: 'Sonnenschein',
    unit: 'h',
    value: [
      {
        id: 'sunshineDuration-0',
        value: 0
      },
      {
        id: 'sunshineDuration-1',
        value: 14
      },
      {
        id: 'sunshineDuration-2',
        value: 9
      },
      {
        id: 'sunshineDuration-3',
        value: 15
      },
      {
        id: 'sunshineDuration-4',
        value: 14
      },
      {
        id: 'sunshineDuration-5',
        value: 5
      },
      {
        id: 'sunshineDuration-6',
        value: 16
      }
    ]
  },
  {
    key: 'daylightDuration',
    apiKey: 'daylight_duration',
    label: 'Tageslicht',
    unit: 'h',
    value: [
      {
        id: 'daylightDuration-0',
        value: 16
      },
      {
        id: 'daylightDuration-1',
        value: 16
      },
      {
        id: 'daylightDuration-2',
        value: 16
      },
      {
        id: 'daylightDuration-3',
        value: 16
      },
      {
        id: 'daylightDuration-4',
        value: 16
      },
      {
        id: 'daylightDuration-5',
        value: 16
      },
      {
        id: 'daylightDuration-6',
        value: 16
      }
    ]
  },
  {
    key: 'cloudCoverMax',
    apiKey: 'cloud_cover_max',
    label: 'Maximale Wolkenbedeckung',
    unit: '%',
    value: [
      {
        id: 'cloudCoverMax-0',
        value: 100
      },
      {
        id: 'cloudCoverMax-1',
        value: 100
      },
      {
        id: 'cloudCoverMax-2',
        value: 100
      },
      {
        id: 'cloudCoverMax-3',
        value: 100
      },
      {
        id: 'cloudCoverMax-4',
        value: 100
      },
      {
        id: 'cloudCoverMax-5',
        value: 100
      },
      {
        id: 'cloudCoverMax-6',
        value: 84
      }
    ]
  },
  {
    key: 'cloudCoverMean',
    apiKey: 'cloud_cover_mean',
    label: 'Durchschnittliche Wolkenbedeckung',
    unit: '%',
    value: [
      {
        id: 'cloudCoverMean-0',
        value: 96
      },
      {
        id: 'cloudCoverMean-1',
        value: 58
      },
      {
        id: 'cloudCoverMean-2',
        value: 74
      },
      {
        id: 'cloudCoverMean-3',
        value: 46
      },
      {
        id: 'cloudCoverMean-4',
        value: 75
      },
      {
        id: 'cloudCoverMean-5',
        value: 94
      },
      {
        id: 'cloudCoverMean-6',
        value: 21
      }
    ]
  },
  {
    key: 'cloudCoverMin',
    apiKey: 'cloud_cover_min',
    label: 'Minimale Wolkenbedeckung',
    unit: '%',
    value: [
      {
        id: 'cloudCoverMin-0',
        value: 70
      },
      {
        id: 'cloudCoverMin-1',
        value: 0
      },
      {
        id: 'cloudCoverMin-2',
        value: 3
      },
      {
        id: 'cloudCoverMin-3',
        value: 18
      },
      {
        id: 'cloudCoverMin-4',
        value: 7
      },
      {
        id: 'cloudCoverMin-5',
        value: 47
      },
      {
        id: 'cloudCoverMin-6',
        value: 0
      }
    ]
  },
  {
    key: 'precipitationSum',
    apiKey: 'precipitation_sum',
    label: 'Niederschlagssumme',
    unit: 'mm',
    value: [
      {
        id: 'precipitationSum-0',
        value: 7
      },
      {
        id: 'precipitationSum-1',
        value: 0
      },
      {
        id: 'precipitationSum-2',
        value: 0
      },
      {
        id: 'precipitationSum-3',
        value: 0
      },
      {
        id: 'precipitationSum-4',
        value: 3
      },
      {
        id: 'precipitationSum-5',
        value: 5
      },
      {
        id: 'precipitationSum-6',
        value: 0
      }
    ]
  },
  {
    key: 'precipitationHours',
    apiKey: 'precipitation_hours',
    label: 'Niederschlagsstunden',
    unit: 'h',
    value: [
      {
        id: 'precipitationHours-0',
        value: 9
      },
      {
        id: 'precipitationHours-1',
        value: 1
      },
      {
        id: 'precipitationHours-2',
        value: 1
      },
      {
        id: 'precipitationHours-3',
        value: 0
      },
      {
        id: 'precipitationHours-4',
        value: 5
      },
      {
        id: 'precipitationHours-5',
        value: 13
      },
      {
        id: 'precipitationHours-6',
        value: 0
      }
    ]
  },
  {
    key: 'precipitationProbabilityMax',
    apiKey: 'precipitation_probability_max',
    label: 'Maximale Niederschlagswahrscheinlichkeit',
    unit: '%',
    value: [
      {
        id: 'precipitationProbabilityMax-0',
        value: 100
      },
      {
        id: 'precipitationProbabilityMax-1',
        value: 40
      },
      {
        id: 'precipitationProbabilityMax-2',
        value: 19
      },
      {
        id: 'precipitationProbabilityMax-3',
        value: 8
      },
      {
        id: 'precipitationProbabilityMax-4',
        value: 54
      },
      {
        id: 'precipitationProbabilityMax-5',
        value: 66
      },
      {
        id: 'precipitationProbabilityMax-6',
        value: 18
      }
    ]
  },
  {
    key: 'precipitationProbabilityMean',
    apiKey: 'precipitation_probability_mean',
    label: 'Durchschnittliche Niederschlagswahrscheinlichkeit',
    unit: '%',
    value: [
      {
        id: 'precipitationProbabilityMean-0',
        value: 34
      },
      {
        id: 'precipitationProbabilityMean-1',
        value: 8
      },
      {
        id: 'precipitationProbabilityMean-2',
        value: 7
      },
      {
        id: 'precipitationProbabilityMean-3',
        value: 1
      },
      {
        id: 'precipitationProbabilityMean-4',
        value: 8
      },
      {
        id: 'precipitationProbabilityMean-5',
        value: 53
      },
      {
        id: 'precipitationProbabilityMean-6',
        value: 14
      }
    ]
  },
  {
    key: 'precipitationProbabilityMin',
    apiKey: 'precipitation_probability_min',
    label: 'Minimale Niederschlagswahrscheinlichkeit',
    unit: '%',
    value: [
      {
        id: 'precipitationProbabilityMin-0',
        value: 0
      },
      {
        id: 'precipitationProbabilityMin-1',
        value: 0
      },
      {
        id: 'precipitationProbabilityMin-2',
        value: 0
      },
      {
        id: 'precipitationProbabilityMin-3',
        value: 0
      },
      {
        id: 'precipitationProbabilityMin-4',
        value: 0
      },
      {
        id: 'precipitationProbabilityMin-5',
        value: 21
      },
      {
        id: 'precipitationProbabilityMin-6',
        value: 10
      }
    ]
  },
  {
    key: 'humidityMax',
    apiKey: 'relative_humidity_2m_max',
    label: 'Maximale Luftfeuchtigkeit',
    unit: '%',
    value: [
      {
        id: 'humidityMax-0',
        value: 88
      },
      {
        id: 'humidityMax-1',
        value: 86
      },
      {
        id: 'humidityMax-2',
        value: 80
      },
      {
        id: 'humidityMax-3',
        value: 69
      },
      {
        id: 'humidityMax-4',
        value: 87
      },
      {
        id: 'humidityMax-5',
        value: 88
      },
      {
        id: 'humidityMax-6',
        value: 93
      }
    ]
  },
  {
    key: 'humidityMean',
    apiKey: 'relative_humidity_2m_mean',
    label: 'Durchschnittliche Luftfeuchtigkeit',
    unit: '%',
    value: [
      {
        id: 'humidityMean-0',
        value: 70
      },
      {
        id: 'humidityMean-1',
        value: 65
      },
      {
        id: 'humidityMean-2',
        value: 64
      },
      {
        id: 'humidityMean-3',
        value: 58
      },
      {
        id: 'humidityMean-4',
        value: 66
      },
      {
        id: 'humidityMean-5',
        value: 79
      },
      {
        id: 'humidityMean-6',
        value: 63
      }
    ]
  },
  {
    key: 'humidityMin',
    apiKey: 'relative_humidity_2m_min',
    label: 'Minimale Luftfeuchtigkeit',
    unit: '%',
    value: [
      {
        id: 'humidityMin-0',
        value: 58
      },
      {
        id: 'humidityMin-1',
        value: 41
      },
      {
        id: 'humidityMin-2',
        value: 44
      },
      {
        id: 'humidityMin-3',
        value: 41
      },
      {
        id: 'humidityMin-4',
        value: 37
      },
      {
        id: 'humidityMin-5',
        value: 71
      },
      {
        id: 'humidityMin-6',
        value: 40
      }
    ]
  },
  {
    key: 'pressureMax',
    apiKey: 'surface_pressure_max',
    label: 'Maximaler Luftdruck',
    unit: 'hPa',
    value: [
      {
        id: 'pressureMax-0',
        value: 974
      },
      {
        id: 'pressureMax-1',
        value: 978
      },
      {
        id: 'pressureMax-2',
        value: 982
      },
      {
        id: 'pressureMax-3',
        value: 987
      },
      {
        id: 'pressureMax-4',
        value: 985
      },
      {
        id: 'pressureMax-5',
        value: 982
      },
      {
        id: 'pressureMax-6',
        value: 984
      }
    ]
  },
  {
    key: 'pressureMean',
    apiKey: 'surface_pressure_mean',
    label: 'Durchschnittlicher Luftdruck',
    unit: 'hPa',
    value: [
      {
        id: 'pressureMean-0',
        value: 972
      },
      {
        id: 'pressureMean-1',
        value: 976
      },
      {
        id: 'pressureMean-2',
        value: 979
      },
      {
        id: 'pressureMean-3',
        value: 985
      },
      {
        id: 'pressureMean-4',
        value: 981
      },
      {
        id: 'pressureMean-5',
        value: 980
      },
      {
        id: 'pressureMean-6',
        value: 983
      }
    ]
  },
  {
    key: 'pressureMin',
    apiKey: 'surface_pressure_min',
    label: 'Minimaler Luftdruck',
    unit: 'hPa',
    value: [
      {
        id: 'pressureMin-0',
        value: 971
      },
      {
        id: 'pressureMin-1',
        value: 974
      },
      {
        id: 'pressureMin-2',
        value: 976
      },
      {
        id: 'pressureMin-3',
        value: 982
      },
      {
        id: 'pressureMin-4',
        value: 977
      },
      {
        id: 'pressureMin-5',
        value: 977
      },
      {
        id: 'pressureMin-6',
        value: 981
      }
    ]
  },
  {
    key: 'visibilityMax',
    apiKey: 'visibility_max',
    label: 'Maximale Sichtweite',
    unit: 'km',
    value: [
      {
        id: 'visibilityMax-0',
        value: 41
      },
      {
        id: 'visibilityMax-1',
        value: 43
      },
      {
        id: 'visibilityMax-2',
        value: 42
      },
      {
        id: 'visibilityMax-3',
        value: 43
      },
      {
        id: 'visibilityMax-4',
        value: 45
      },
      {
        id: 'visibilityMax-5',
        value: 40
      },
      {
        id: 'visibilityMax-6',
        value: 44
      }
    ]
  },
  {
    key: 'visibilityMean',
    apiKey: 'visibility_mean',
    label: 'Durchschnittliche Sichtweite',
    unit: 'km',
    value: [
      {
        id: 'visibilityMean-0',
        value: 34
      },
      {
        id: 'visibilityMean-1',
        value: 37
      },
      {
        id: 'visibilityMean-2',
        value: 39
      },
      {
        id: 'visibilityMean-3',
        value: 40
      },
      {
        id: 'visibilityMean-4',
        value: 37
      },
      {
        id: 'visibilityMean-5',
        value: 24
      },
      {
        id: 'visibilityMean-6',
        value: 37
      }
    ]
  },
  {
    key: 'visibilityMin',
    apiKey: 'visibility_min',
    label: 'Minimale Sichtweite',
    unit: 'km',
    value: [
      {
        id: 'visibilityMin-0',
        value: 10
      },
      {
        id: 'visibilityMin-1',
        value: 27
      },
      {
        id: 'visibilityMin-2',
        value: 34
      },
      {
        id: 'visibilityMin-3',
        value: 37
      },
      {
        id: 'visibilityMin-4',
        value: 26
      },
      {
        id: 'visibilityMin-5',
        value: 5
      },
      {
        id: 'visibilityMin-6',
        value: 32
      }
    ]
  },
  {
    key: 'windDirectionDominant',
    apiKey: 'wind_direction_10m_dominant',
    label: 'Dominante Windrichtung',
    unit: '°',
    value: [
      {
        id: 'windDirectionDominant-0',
        value: 206
      },
      {
        id: 'windDirectionDominant-1',
        value: 202
      },
      {
        id: 'windDirectionDominant-2',
        value: 216
      },
      {
        id: 'windDirectionDominant-3',
        value: 238
      },
      {
        id: 'windDirectionDominant-4',
        value: 246
      },
      {
        id: 'windDirectionDominant-5',
        value: 216
      },
      {
        id: 'windDirectionDominant-6',
        value: 34
      }
    ]
  },
  {
    key: 'windSpeedMax',
    apiKey: 'wind_speed_10m_max',
    label: 'Maximale Windgeschwindigkeit',
    unit: 'km/h',
    value: [
      {
        id: 'windSpeedMax-0',
        value: 23
      },
      {
        id: 'windSpeedMax-1',
        value: 17
      },
      {
        id: 'windSpeedMax-2',
        value: 15
      },
      {
        id: 'windSpeedMax-3',
        value: 16
      },
      {
        id: 'windSpeedMax-4',
        value: 13
      },
      {
        id: 'windSpeedMax-5',
        value: 19
      },
      {
        id: 'windSpeedMax-6',
        value: 8
      }
    ]
  },
  {
    key: 'windSpeedMean',
    apiKey: 'wind_speed_10m_mean',
    label: 'Durchschnittliche Windgeschwindigkeit',
    unit: 'km/h',
    value: [
      {
        id: 'windSpeedMean-0',
        value: 19
      },
      {
        id: 'windSpeedMean-1',
        value: 11
      },
      {
        id: 'windSpeedMean-2',
        value: 8
      },
      {
        id: 'windSpeedMean-3',
        value: 9
      },
      {
        id: 'windSpeedMean-4',
        value: 5
      },
      {
        id: 'windSpeedMean-5',
        value: 11
      },
      {
        id: 'windSpeedMean-6',
        value: 4
      }
    ]
  },
  {
    key: 'windSpeedMin',
    apiKey: 'wind_speed_10m_min',
    label: 'Minimale Windgeschwindigkeit',
    unit: 'km/h',
    value: [
      {
        id: 'windSpeedMin-0',
        value: 13
      },
      {
        id: 'windSpeedMin-1',
        value: 5
      },
      {
        id: 'windSpeedMin-2',
        value: 1
      },
      {
        id: 'windSpeedMin-3',
        value: 2
      },
      {
        id: 'windSpeedMin-4',
        value: 0
      },
      {
        id: 'windSpeedMin-5',
        value: 1
      },
      {
        id: 'windSpeedMin-6',
        value: 1
      }
    ]
  },
  {
    key: 'windGustsMax',
    apiKey: 'wind_gusts_10m_max',
    label: 'Maximale Windböen',
    unit: 'km/h',
    value: [
      {
        id: 'windGustsMax-0',
        value: 53
      },
      {
        id: 'windGustsMax-1',
        value: 41
      },
      {
        id: 'windGustsMax-2',
        value: 48
      },
      {
        id: 'windGustsMax-3',
        value: 45
      },
      {
        id: 'windGustsMax-4',
        value: 44
      },
      {
        id: 'windGustsMax-5',
        value: 66
      },
      {
        id: 'windGustsMax-6',
        value: 18
      }
    ]
  },
  {
    key: 'windGustsMean',
    apiKey: 'wind_gusts_10m_mean',
    label: 'Durchschnittliche Windböen',
    unit: 'km/h',
    value: [
      {
        id: 'windGustsMean-0',
        value: 42
      },
      {
        id: 'windGustsMean-1',
        value: 26
      },
      {
        id: 'windGustsMean-2',
        value: 26
      },
      {
        id: 'windGustsMean-3',
        value: 29
      },
      {
        id: 'windGustsMean-4',
        value: 20
      },
      {
        id: 'windGustsMean-5',
        value: 32
      },
      {
        id: 'windGustsMean-6',
        value: 10
      }
    ]
  },
  {
    key: 'windGustsMin',
    apiKey: 'wind_gusts_10m_min',
    label: 'Minimale Windböen',
    unit: 'km/h',
    value: [
      {
        id: 'windGustsMin-0',
        value: 32
      },
      {
        id: 'windGustsMin-1',
        value: 15
      },
      {
        id: 'windGustsMin-2',
        value: 7
      },
      {
        id: 'windGustsMin-3',
        value: 10
      },
      {
        id: 'windGustsMin-4',
        value: 9
      },
      {
        id: 'windGustsMin-5',
        value: 5
      },
      {
        id: 'windGustsMin-6',
        value: 4
      }
    ]
  },
  {
    key: 'time',
    label: 'Datum & Zeit',
    value: [
      {
        id: 'time-0',
        value: '04.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-1',
        value: '05.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-2',
        value: '06.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-3',
        value: '07.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-4',
        value: '08.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-5',
        value: '09.06.2026 um 02:00 Uhr'
      },
      {
        id: 'time-6',
        value: '10.06.2026 um 02:00 Uhr'
      }
    ]
  }
];
