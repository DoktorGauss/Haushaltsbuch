import { TestBed } from '@angular/core/testing';

import { NetSaferService } from './net-safer.service';

describe('NetSaferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetSaferService = TestBed.get(NetSaferService);
    expect(service).toBeTruthy();
  });
});
