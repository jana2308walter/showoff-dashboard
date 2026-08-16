import { Component, computed, inject, input } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';
import { SiteTitleComponent } from '../../site-title/site-title.component';
import { HourlyCardComponent } from './hourly-card/hourly-card.component';

@Component({
  selector: 'sod-hourly-weather',
  imports: [SiteTitleComponent, HourlyCardComponent],
  templateUrl: './hourly-weather.component.html'
})
export class HourlyWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  readonly $date = input(new Date(), { alias: 'date' });

  protected readonly $formattedDate = computed(() => {
    const rawDate = this.$date();
    const day = rawDate.getDate().toString().padStart(2, '0');
    const month = (rawDate.getMonth() + 1).toString().padStart(2, '0');
    const year = rawDate.getFullYear().toString();

    return `${day}.${month}.${year}`;
  });

  protected readonly $hourlyWeathers = computed(() => {
    const weather = this.weatherService.$weather.value;
    const hourly = weather()?.hourly ?? [];

    const targetDate = this.$formattedDate();
    return hourly.filter((weather) => weather.time?.value?.toString().startsWith(targetDate));
  });
}
