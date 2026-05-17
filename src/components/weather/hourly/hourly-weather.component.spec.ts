import { TestBed } from '@angular/core/testing';
import { HourlyWeatherComponent } from './hourly-weather.component';

describe('Hourly Weather', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyWeatherComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HourlyWeatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
