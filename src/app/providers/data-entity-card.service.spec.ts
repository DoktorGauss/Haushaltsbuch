import { TestBed } from '@angular/core/testing';

import { DataEntityCardService } from './data-entity-card.service';

describe('DataEntityCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataEntityCardService = TestBed.get(DataEntityCardService);
    expect(service).toBeTruthy();
  });
});
