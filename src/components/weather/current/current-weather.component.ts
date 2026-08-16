import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';
import {
  CurrentWeatherConfig,
  StringCurrentWeatherConfig,
  WeatherKey
} from '../../../model/weather';
import { CurrentCardComponent } from './current-card/current-card.component';
import { SiteTitleComponent } from '../../site-title/site-title.component';

@Component({
  selector: 'sod-current-weather',
  imports: [CurrentCardComponent, SiteTitleComponent],
  templateUrl: './current-weather.component.html'
})
export class CurrentWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $currentWeather = computed(() => {
    const weather = this.weatherService.$weather.value;
    return weather()?.current;
  });

  protected readonly $temperature = computed(() => this.mapWeatherPropertyToString('temperature'));
  protected readonly $apparentTemperature = computed(() =>
    this.mapWeatherPropertyToString('apparentTemperature')
  );
  protected readonly $weatherCode = computed(() => this.mapWeatherPropertyToString('weatherCode'));
  protected readonly $precipitation = computed(() =>
    this.mapWeatherPropertyToString('precipitation')
  );
  protected readonly $precipitationProbability = computed(() =>
    this.mapWeatherPropertyToString('precipitationProbability')
  );
  protected readonly $windSpeed = computed(() => this.mapWeatherPropertyToString('windSpeed'));
  protected readonly $windDirection = computed(() =>
    this.mapWeatherPropertyToString('windDirection')
  );
  protected readonly $windGusts = computed(() => this.mapWeatherPropertyToString('windGusts'));
  protected readonly $humidity = computed(() => this.mapWeatherPropertyToString('humidity'));
  protected readonly $pressure = computed(() => this.mapWeatherPropertyToString('pressure'));
  protected readonly $cloudCoverLow = computed(() =>
    this.mapWeatherPropertyToString('cloudCoverLow')
  );
  protected readonly $cloudCoverMid = computed(() =>
    this.mapWeatherPropertyToString('cloudCoverMid')
  );
  protected readonly $cloudCoverHigh = computed(() =>
    this.mapWeatherPropertyToString('cloudCoverHigh')
  );
  protected readonly $uvIndex = computed(() => this.mapWeatherPropertyToString('uvIndex'));
  protected readonly $visibility = computed(() => this.mapWeatherPropertyToString('visibility'));
  protected readonly $time = computed(() => this.mapWeatherPropertyToString('time'));

  protected getCloudCoverLabel(cloudCover: CurrentWeatherConfig, isTotal = false): string {
    const labelParts = cloudCover.label.split(' ');
    const firstPart = labelParts[0];
    const secondPart = labelParts[1].replace('(', '').replace(')', '');

    return isTotal ? firstPart : secondPart;
  }

  private mapWeatherPropertyToString(key: WeatherKey): StringCurrentWeatherConfig {
    const weathers = this.$currentWeather() || [];
    const property = this.getProperty(weathers, key);
    return this.getStringWeatherConfig(property);
  }

  private getProperty(weathers: CurrentWeatherConfig[], key: WeatherKey): CurrentWeatherConfig {
    return weathers.filter((weather) => weather.key === key)?.[0];
  }

  private getStringWeatherConfig(property: CurrentWeatherConfig): StringCurrentWeatherConfig {
    return {
      key: property.key,
      label: property.label,
      value: (property.value ?? '').toString(),
      unit: property.unit || ''
    };
  }
}
