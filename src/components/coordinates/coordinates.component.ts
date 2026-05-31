import { Component, inject } from '@angular/core';
import { WeatherService } from '../../model/weather.service';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sod-coordinates',
  imports: [ReactiveFormsModule],
  templateUrl: './coordinates.component.html'
})
export class CoordinatesComponent {
  private readonly weatherService = inject(WeatherService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  protected readonly form = this.formBuilder.group({
    latitude: [47.92, [Validators.required, Validators.min(-90), Validators.max(90)]],
    longitude: [7.79, [Validators.required, Validators.min(-180), Validators.max(180)]]
  });

  protected get latitudeControl(): FormControl<number> {
    return this.form.get('latitude') as FormControl;
  }

  protected get longitudeControl(): FormControl<number> {
    return this.form.get('longitude') as FormControl;
  }

  protected setCoordinates(): void {
    const latitude = this.latitudeControl.value;
    const longitude = this.longitudeControl.value;

    const latitudeValid = this.latitudeControl.valid;
    const longitudeValid = this.longitudeControl.valid;

    if (latitudeValid && longitudeValid) {
      this.weatherService.coordinates = { latitude, longitude };

      this.router.navigate(['/weather']);
    }
  }
}
