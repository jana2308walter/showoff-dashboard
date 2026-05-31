import { TestBed } from '@angular/core/testing';
import { DailyWeatherComponent } from './daily-weather.component';

describe('Daily Weather', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyWeatherComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DailyWeatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
