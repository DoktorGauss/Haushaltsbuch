import { TestBed } from '@angular/core/testing';

import { OmegaService } from './omega.service';

describe('OmegaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmegaService = TestBed.get(OmegaService);
    expect(service).toBeTruthy();
  });
});
