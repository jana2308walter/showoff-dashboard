import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../../../model/weather.service';
import {
  CurrentWeatherConfig,
  StringCurrentWeatherConfig,
  WeatherKey
} from '../../../model/weather';
import { CardComponent } from './card/card.component';
import { SiteTitleComponent } from '../../site-title/site-title.component';

@Component({
  selector: 'sod-current-weather',
  imports: [CardComponent, SiteTitleComponent],
  templateUrl: './current-weather.component.html'
})
export class CurrentWeatherComponent {
  private readonly weatherService = inject(WeatherService);

  protected readonly $currentWeather = computed(() => {
    const weather = this.weatherService.$weather.value;
    return weather()?.current;
  });

  $temperature = computed(() => this.mapWeatherPropertyToString('temperature'));
  $apparentTemperature = computed(() => this.mapWeatherPropertyToString('apparentTemperature'));
  $weatherCode = computed(() => this.mapWeatherPropertyToString('weatherCode'));
  $precipitation = computed(() => this.mapWeatherPropertyToString('precipitation'));
  $precipitationProbability = computed(() =>
    this.mapWeatherPropertyToString('precipitationProbability')
  );
  $windSpeed = computed(() => this.mapWeatherPropertyToString('windSpeed'));
  $windDirection = computed(() => this.mapWeatherPropertyToString('windDirection'));
  $windGusts = computed(() => this.mapWeatherPropertyToString('windGusts'));
  $humidity = computed(() => this.mapWeatherPropertyToString('humidity'));
  $pressure = computed(() => this.mapWeatherPropertyToString('pressure'));
  $cloudCoverLow = computed(() => this.mapWeatherPropertyToString('cloudCoverLow'));
  $cloudCoverMid = computed(() => this.mapWeatherPropertyToString('cloudCoverMid'));
  $cloudCoverHigh = computed(() => this.mapWeatherPropertyToString('cloudCoverHigh'));
  $uvIndex = computed(() => this.mapWeatherPropertyToString('uvIndex'));
  $visibility = computed(() => this.mapWeatherPropertyToString('visibility'));
  $time = computed(() => this.mapWeatherPropertyToString('time'));

  mapWeatherPropertyToString(key: WeatherKey): StringCurrentWeatherConfig {
    const weathers = this.$currentWeather() || [];
    const property = this.getProperty(weathers, key);
    return this.getStringWeatherConfig(property);
  }

  getProperty(weathers: CurrentWeatherConfig[], key: WeatherKey): CurrentWeatherConfig {
    return weathers.filter((weather) => weather.key === key)?.[0];
  }

  getStringWeatherConfig(property: CurrentWeatherConfig): StringCurrentWeatherConfig {
    return {
      key: property.key,
      label: property.label,
      value: (property.value ?? '').toString(),
      unit: property.unit || ''
    };
  }

  protected getCloudCoverLabel(cloudCover: CurrentWeatherConfig, isTotal = false): string {
    const labelParts = cloudCover.label.split(' ');
    const firstPart = labelParts[0];
    const secondPart = labelParts[1].replace('(', '').replace(')', '');

    return isTotal ? firstPart : secondPart;
  }
}
