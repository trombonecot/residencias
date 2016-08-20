/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ResidenciaService } from './residencia.service';

describe('Service: Residencia', () => {
  beforeEach(() => {
    addProviders([ResidenciaService]);
  });

  it('should ...',
    inject([ResidenciaService],
      (service: ResidenciaService) => {
        expect(service).toBeTruthy();
      }));
});
