import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'sod-daily-weather',
  templateUrl: './daily-weather.component.html'
})
export class DailyWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $dailyWeathers = computed(() => {
    const weather = this.weatherService.$weather.value;
    return weather()?.daily ?? [];
  });

  protected readonly uuidV4 = uuidV4;
}
