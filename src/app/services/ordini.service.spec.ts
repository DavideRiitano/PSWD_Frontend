/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdiniService } from './ordini.service';

describe('Service: Ordini', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdiniService]
    });
  });

  it('should ...', inject([OrdiniService], (service: OrdiniService) => {
    expect(service).toBeTruthy();
  }));
});
