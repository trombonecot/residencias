/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ResidenciaApiService } from './residencia-api.service';

describe('Service: ResidenciaApi', () => {
  beforeEach(() => {
    addProviders([ResidenciaApiService]);
  });

  it('should ...',
    inject([ResidenciaApiService],
      (service: ResidenciaApiService) => {
        expect(service).toBeTruthy();
      }));
});
