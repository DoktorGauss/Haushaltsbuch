import { TestBed } from '@angular/core/testing';

import { OcrNetService } from './ocr-net.service';

describe('OcrNetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OcrNetService = TestBed.get(OcrNetService);
    expect(service).toBeTruthy();
  });
});
