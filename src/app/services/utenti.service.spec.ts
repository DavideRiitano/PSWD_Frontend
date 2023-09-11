/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UtentiService } from './utenti.service';

describe('Service: Utenti', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtentiService]
    });
  });

  it('should ...', inject([UtentiService], (service: UtentiService) => {
    expect(service).toBeTruthy();
  }));
});
