import { TestBed } from '@angular/core/testing';
import { WeatherLoadingComponent } from './weather-loading.component';

describe('Weather Loading', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherLoadingComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherLoadingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
