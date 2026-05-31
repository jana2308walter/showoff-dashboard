import { Component, inject } from '@angular/core';
import { WeatherLoadingComponent } from './loading/weather-loading.component';
import { WeatherErrorComponent } from './error/weather-error.component';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from '../../model/weather.service';

@Component({
  selector: 'sod-weather',
  imports: [WeatherLoadingComponent, WeatherErrorComponent, RouterOutlet],
  templateUrl: './weather.component.html'
})
export class WeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $weather = this.weatherService.$weather;
}
