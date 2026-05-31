import { TestBed } from '@angular/core/testing';
import { CurrentWeatherComponent } from './current-weather.component';

describe('Current Weather', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
