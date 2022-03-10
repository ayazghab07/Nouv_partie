import { TestBed } from '@angular/core/testing';

import { ParieurserService } from './parieurser.service';

describe('ParieurserService', () => {
  let service: ParieurserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParieurserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
