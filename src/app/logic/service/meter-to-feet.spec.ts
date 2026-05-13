import { TestBed } from '@angular/core/testing';

import { MeterToFeet } from './meter-to-feet';

describe('Feet', () => {
  let service: MeterToFeet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterToFeet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
