import { Component, input } from '@angular/core';
import { WeatherConfig } from '../../../../model/weather';

@Component({
  selector: 'sod-hourly-data',
  templateUrl: './hourly-data.component.html',
  host: {
    'class': 'hourly-data'
  }
})
export class HourlyDataComponent {
  readonly $data = input<WeatherConfig<string | number> | undefined>(undefined, {
    alias: 'data'
  });

  readonly $items = input<(WeatherConfig<string | number> | undefined)[]>(undefined, {
    alias: 'items'
  });

  protected getValue(value?: string | number, unit?: string): string {
    if (value === undefined) {
      return '';
    }

    if (unit === '°') {
      return value + unit;
    }

    if (!unit) {
      return value.toString();
    }

    return value + ' ' + unit;
  }
}
