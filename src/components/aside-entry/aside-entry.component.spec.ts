import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideEntryComponent } from './aside-entry.component';

describe('AsideEntryComponent', () => {
  let component: AsideEntryComponent;
  let fixture: ComponentFixture<AsideEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideEntryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AsideEntryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
