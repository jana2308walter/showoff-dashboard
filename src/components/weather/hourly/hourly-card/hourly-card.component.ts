import { Component, input } from '@angular/core';
import { ForecastWeatherConfig, WeatherConfig } from '../../../../model/weather';
import { HourlyDataComponent } from '../hourly-data/hourly-data.component';

@Component({
  selector: 'sod-hourly-card',
  imports: [HourlyDataComponent],
  templateUrl: './hourly-card.component.html',
  host: {
    class: 'hourly-card'
  }
})
export class HourlyCardComponent {
  readonly $weather = input<ForecastWeatherConfig | undefined>(undefined, { alias: 'weather' });

  protected getTime(date?: WeatherConfig<string | number>): string {
    return date?.value?.toString().split('um ')?.[1] ?? '';
  }

  protected getCloudCover(
    low?: WeatherConfig<string | number>,
    mid?: WeatherConfig<string | number>,
    high?: WeatherConfig<string | number>
  ): (WeatherConfig<string | number> | undefined)[] {
    return [low, mid, high].filter(Boolean);
  }
}
