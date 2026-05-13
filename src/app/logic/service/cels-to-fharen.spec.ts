import { TestBed } from '@angular/core/testing';

import { CelsToFharen } from './cels-to-fharen';

describe('Fharenheit', () => {
  let service: CelsToFharen;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelsToFharen);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
