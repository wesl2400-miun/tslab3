import { TestBed } from '@angular/core/testing';

import { Fharenheit } from './fharenheit';

describe('Fharenheit', () => {
  let service: Fharenheit;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fharenheit);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
