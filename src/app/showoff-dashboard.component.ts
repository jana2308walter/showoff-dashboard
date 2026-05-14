import { Component, effect, inject } from '@angular/core';
import { WeatherService } from '../model/weather.service';

@Component({
  selector: 'sod-root',
  imports: [],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $weather = this.weatherService.$weather;

  constructor() {
    effect(() => {
      const weather = this.$weather.value();

      const currentWeather = weather?.current;
      const hourlyWeather = weather?.hourly;
      const dailyWeather = weather?.daily;

      console.log('%cCurrent', 'color: fuchsia', currentWeather);
      console.log('%cHourly', 'color: orange', hourlyWeather);
      console.log('%cDaily', 'color: cyan', dailyWeather);
    });

    this.weatherService.coordinates = { latitude: 47.92, longitude: 7.79 };
  }
}
