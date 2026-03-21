import { TestBed } from '@angular/core/testing';
import { EtdComponent } from './etd.component';

describe('Equi-Track-Dashboard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtdComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EtdComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
