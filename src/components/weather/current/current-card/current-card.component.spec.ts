import { TestBed } from '@angular/core/testing';
import { CurrentCardComponent } from './current-card.component';

describe('CurrentCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCardComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrentCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
