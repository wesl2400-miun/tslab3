import { TestBed } from '@angular/core/testing';

import { Feet } from './feet';

describe('Feet', () => {
  let service: Feet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Feet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
