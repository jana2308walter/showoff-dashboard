import { Component, effect, resource, signal } from '@angular/core';
import { Coordinates, getWeatherData } from '../model/api-methods';

@Component({
  selector: 'sod-root',
  imports: [],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {
  private readonly $coordinates = signal<Coordinates>({
    latitude: 47.92,
    longitude: 7.79
  });

  protected readonly $weather = resource({
    params: () => this.$coordinates(),
    loader: async ({ params }) => {
      return await getWeatherData(params.latitude, params.longitude);
    }
  }).asReadonly();

  constructor() {
    effect(() => {
      const weather = this.$weather.value();

      const current = weather?.current;
      const hourly = weather?.hourly;
      const daily = weather?.daily;

      console.log('%cCurrent', 'color: cyan', current);
      console.log('%cHourly', 'color: fuchsia', hourly);
      console.log('%cDaily', 'color: orange', daily);
    });
  }
}
