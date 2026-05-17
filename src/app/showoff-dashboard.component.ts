import { Component, computed, inject } from '@angular/core';
import { WeatherService } from '../model/weather.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'sod-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './showoff-dashboard.component.html'
})
export class ShowoffDashboardComponent {
  private readonly weatherService = inject(WeatherService);
  private readonly formBuilder = inject(FormBuilder);

  protected readonly $weather = this.weatherService.$weather;

  protected readonly $currentWeather = computed(() => this.$weather.value()?.current);
  protected readonly $hourlyWeather = computed(() => this.$weather.value()?.hourly);
  protected readonly $dailyWeather = computed(() => this.$weather.value()?.daily);

  protected readonly $coordinates = this.weatherService.$coordinates;

  protected readonly form = this.formBuilder.group({
    latitude: [47.92, [Validators.required, Validators.min(-90), Validators.max(90)]],
    longitude: [7.79, [Validators.required, Validators.min(-180), Validators.max(180)]]
  });

  private get latitudeControl(): FormControl<number> {
    return this.form.get('latitude') as FormControl;
  }

  private get longitudeControl(): FormControl<number> {
    return this.form.get('longitude') as FormControl;
  }

  protected checkWeather(): void {
    const latitude = this.latitudeControl.value;
    const longitude = this.longitudeControl.value;

    const latitudeValid = this.latitudeControl.valid;
    const longitudeValid = this.longitudeControl.valid;

    if (latitudeValid && longitudeValid) {
      this.weatherService.coordinates = { latitude, longitude };
    }
  }
}
