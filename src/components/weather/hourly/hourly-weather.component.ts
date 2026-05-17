import { Component, computed, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { WeatherService } from '../../../model/weather.service';

@Component({
  selector: 'sod-hourly-weather',
  imports: [JsonPipe],
  templateUrl: './hourly-weather.component.html'
})
export class HourlyWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $hourlyWeather = computed(() => {
    const weather = this.weatherService.$weather.value();
    return weather?.hourly;
  });
}
