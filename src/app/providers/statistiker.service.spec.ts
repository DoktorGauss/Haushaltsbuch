import { TestBed } from '@angular/core/testing';

import { StatistikerService } from './statistiker.service';

describe('StatistikerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatistikerService = TestBed.get(StatistikerService);
    expect(service).toBeTruthy();
  });
});
