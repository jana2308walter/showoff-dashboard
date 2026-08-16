import { TestBed } from '@angular/core/testing';
import { HourlyCardComponent } from './hourly-card.component';

describe('HourlyCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyCardComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HourlyCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
