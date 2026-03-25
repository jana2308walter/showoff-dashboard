import { TestBed } from '@angular/core/testing';
import { ShowoffDashboardComponent } from './showoff-dashboard.component';

describe('Showoff-Dashboard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowoffDashboardComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ShowoffDashboardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
