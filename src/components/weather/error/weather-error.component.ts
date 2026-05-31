import { Component, Input } from '@angular/core';

@Component({
  selector: 'sod-weather-error',
  templateUrl: './weather-error.component.html'
})
export class WeatherErrorComponent {
  @Input() reason?: 'error' | 'missingCoordinates';
}
