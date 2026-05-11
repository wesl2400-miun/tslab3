import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetForm } from './feet-form';

describe('FeetForm', () => {
  let component: FeetForm;
  let fixture: ComponentFixture<FeetForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeetForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FeetForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
