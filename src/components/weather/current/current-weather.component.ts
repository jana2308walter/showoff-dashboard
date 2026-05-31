import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';

@Component({
  selector: 'sod-current-weather',
  templateUrl: './current-weather.component.html'
})
export class CurrentWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $currentWeather = computed(() => {
    const weather = this.weatherService.$weather.value;
    return weather()?.current;
  });
}
