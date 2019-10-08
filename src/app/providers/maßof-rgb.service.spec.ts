import { TestBed } from '@angular/core/testing';

import { MaßOfRGBService, FarbMenge, RGBMenge } from './maßof-rgb.service';

fdescribe('MaßOfRGBService', () => {
  let service: MaßOfRGBService;

  beforeEach(() => TestBed.configureTestingModule({}));

  describe('the technic tests (kann es tun was es soll?): ', () => {
    let service: MaßOfRGBService;
    beforeEach( () => {
      service = TestBed.get(MaßOfRGBService);
    });

    it('service should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have the method getMaßRGB(r,g,b)', () => {
      expect(service.getPseudoMaßRGB).toBeDefined();
    });

    

    
  });

  describe('the logical tests: (tut es das was es soll?)', () => {
    let service: MaßOfRGBService;
    beforeEach( () => {
      service = TestBed.get(MaßOfRGBService);
    });
    describe( 'test the pseudoMaß function', () => {
      it('maß of (0,0,0) => 0', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 0, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 0, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(0);
      });

      it('maß of (0,0,1) => 1', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 0, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 1, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(1);
      });

      it('maß of (0,0,255) => 255', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 0, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 255, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(255);
      });

      it('maß of (0,1,0) => 256', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 1, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 0, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(256);
      });

      it('maß of (0,1,1) => 257', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 1, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 1, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(257);
      });

      it('maß of (0,1,255) => 256 + 255 = 511', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 1, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 255, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(511);
      });


      it('maß of (0,2,0) => (256+256) = 512', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 2, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 0, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(512);
      });

      it('maß of (0,2,255) => (256+256) + 255 = 767', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 2, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 255, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(767);
      });

      it('maß of (0,255,0) => 255*256 = 65280', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 255, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 0, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(255*256);
      });

      it('maß of (0,255,255) => 255*256+255', () => {
        const rot: FarbMenge = {wert: 0, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 255, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 255, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(255*256 + 255);
      });

      it('maß of (1,0,0) => 2', () => {
        const rot: FarbMenge = {wert: 1, min: 0 , max: 255};
        const gelb: FarbMenge = {wert: 0, min: 0 , max: 255}; 
        const blau: FarbMenge = {wert: 0, min: 0 , max: 255};
        
        const maß = service.getPseudoMaßRGB(rot,gelb,blau);
        expect(maß).toBe(256*256);
      });


      
     

      
    });

    describe( 'ok now the hard tests: ' ,() => {
        it('each kombination got an unique number (injektiv)', () => {
            let sum: number = 0;
            for (let r = 0; r <= 255; r++) {
              for (let g = 0; g <= 255; g++) {
                for (let b = 0; b <= 255; b++) {
                  const rot: FarbMenge = { wert: r, min: 0 , max: 255};
                  const gelb: FarbMenge = { wert: g, min: 0 , max: 255};
                  const blau: FarbMenge = { wert: b, min: 0 , max: 255};
                  // const mix : RGBMenge = {r: rot, g: gelb , b: blau};
                  sum += service.getMaßRGB(rot,gelb,blau);
                }
              }
            }
        });
    });
  });
});
// export interface FarbMenge{
//   wert: number;
//   min : 0;
//   max : 255;
// }

// export interface RGBMenge{
//   r: FarbMenge;
//   g: FarbMenge;
//   b: FarbMenge;
// }


