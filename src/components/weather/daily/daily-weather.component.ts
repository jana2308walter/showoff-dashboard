import { Component, computed, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { WeatherService } from '../../../model/weather.service';

@Component({
  selector: 'sod-daily-weather',
  imports: [JsonPipe],
  templateUrl: './daily-weather.component.html'
})
export class DailyWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $dailyWeather = computed(() => {
    const weather = this.weatherService.$weather.value();
    return weather?.daily;
  });
}
