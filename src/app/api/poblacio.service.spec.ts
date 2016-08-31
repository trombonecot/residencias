/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PoblacioService } from './poblacio.service';

describe('Service: Poblacio', () => {
  beforeEach(() => {
    addProviders([PoblacioService]);
  });

  it('should ...',
    inject([PoblacioService],
      (service: PoblacioService) => {
        expect(service).toBeTruthy();
      }));
});
