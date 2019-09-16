import { TestBed } from '@angular/core/testing';

import { MaßOfRGBService } from './maßof-rgb.service';

fdescribe('MaßOfRGBService', () => {
  let service: MaßOfRGBService;

  beforeEach(() => TestBed.configureTestingModule({}));

  describe('the technic tests (kann es tun was es soll?): ', () => {
    it('service should be created', () => {
      const service: MaßOfRGBService = TestBed.get(MaßOfRGBService);
      expect(service).toBeTruthy();
    });

    it('should have the method getMaßRGB(r,g,b)', () => {
      const service: MaßOfRGBService = TestBed.get(MaßOfRGBService);
      expect(service.getMaßRGB).toBeDefined();
    });

    
  });

  it('the logical tests: (tut es das was es soll?)', () => {
    
  });
});



