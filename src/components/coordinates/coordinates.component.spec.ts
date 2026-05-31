import { TestBed } from '@angular/core/testing';
import { CoordinatesComponent } from './coordinates.component';

describe('Coordinates', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatesComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CoordinatesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
