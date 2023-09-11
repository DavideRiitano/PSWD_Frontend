import { TestBed } from '@angular/core/testing';

import { CercaService } from './cerca.service';

describe('CercaService', () => {
  let service: CercaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CercaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
