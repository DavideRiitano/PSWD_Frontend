/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProdottiService } from './prodotti.service';

describe('Service: Prodotti', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdottiService]
    });
  });

  it('should ...', inject([ProdottiService], (service: ProdottiService) => {
    expect(service).toBeTruthy();
  }));
});
