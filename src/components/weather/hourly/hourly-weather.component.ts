import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';
import { WeatherConfigs } from '../../../model/weather';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'sod-hourly-weather',
  templateUrl: './hourly-weather.component.html'
})
export class HourlyWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $hourlyWeathers = computed<WeatherConfigs[]>(() => {
    const weather = this.weatherService.$weather.value;
    return weather()?.hourly ?? [];
  });

  protected readonly uuidV4 = uuidV4;
}
