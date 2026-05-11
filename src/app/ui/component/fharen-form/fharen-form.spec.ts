import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FharenForm } from './fharen-form';

describe('FharenForm', () => {
  let component: FharenForm;
  let fixture: ComponentFixture<FharenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FharenForm],
    }).compileComponents();

    fixture = TestBed.createComponent(FharenForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
