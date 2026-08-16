import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDataComponent } from './hourly-data.component';

describe('HourlyData', () => {
  let component: HourlyDataComponent;
  let fixture: ComponentFixture<HourlyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyDataComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
