import { TestBed } from '@angular/core/testing';
import { WeatherErrorComponent } from './weather-error.component';

describe('Weather Error', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherErrorComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherErrorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
