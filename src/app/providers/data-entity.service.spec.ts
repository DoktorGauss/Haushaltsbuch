import { TestBed } from '@angular/core/testing';

import { DataEntityService } from './data-entity.service';

describe('DataEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataEntityService = TestBed.get(DataEntityService);
    expect(service).toBeTruthy();
  });
});
