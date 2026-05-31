import { TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';

describe('Weather', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(WeatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
