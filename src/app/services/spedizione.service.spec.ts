/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpedizioneService } from './spedizione.service';

describe('Service: Spedizione', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpedizioneService]
    });
  });

  it('should ...', inject([SpedizioneService], (service: SpedizioneService) => {
    expect(service).toBeTruthy();
  }));
});
