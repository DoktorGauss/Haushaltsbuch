import { TestBed } from '@angular/core/testing';

import { PixelOfImageService } from './pixel-of-image.service';
import { ImageFilterPattern, PixelRect, PixelPoint, PixelData } from './models/ImageData.model';

fdescribe('PixelOfImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  
  it('should be created', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    expect(service).toBeTruthy();
  });

  describe('loading image Data tests -> ', () => {
    it('should set Image data by picName', () => {
      const service: PixelOfImageService = TestBed.get(PixelOfImageService);
      service.loadImage("NoKassenBon_9.jpg");
      expect(service.ImageData).toBeDefined();
      expect(service.ImageData.rgba_pixels).toBeDefined();
      expect(service.ImageData.width).toBeDefined();
      expect(service.ImageData.height).toBeDefined();
    });

    it('should set Image data by picName + API', () => {
      const service: PixelOfImageService = TestBed.get(PixelOfImageService);
      service.loadImageByAPI("1", "https://jsonplaceholder.typicode.com/todos/");
      expect(service.ImageData).toBeDefined();
      expect(service.ImageData.rgba_pixels).toBeDefined();
      expect(service.ImageData.width).toBeDefined();
      expect(service.ImageData.height).toBeDefined();
    });

    it('should set Image data by ID + API', () => {
      const service: PixelOfImageService = TestBed.get(PixelOfImageService);
      service.loadImageByAPIID(1, "https://jsonplaceholder.typicode.com/todos/1");
      expect(service.ImageData).toBeDefined();
      expect(service.ImageData.rgba_pixels).toBeDefined();
      expect(service.ImageData.width).toBeDefined();
      expect(service.ImageData.height).toBeDefined();
    });
  });
  

  it('should set pattern', () =>{
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    // test all Filter
    service.setPattern(ImageFilterPattern.all);
    expect(service.FilterPattern).toBe(ImageFilterPattern.all);
    // test block filter
    service.setPattern(ImageFilterPattern.block);
    expect(service.FilterPattern).toBe(ImageFilterPattern.block);
    // test crosshair filter
    service.setPattern(ImageFilterPattern.crosshairs);
    expect(service.FilterPattern).toBe(ImageFilterPattern.crosshairs);
    // test random filter
    service.setPattern(ImageFilterPattern.random);
    expect(service.FilterPattern).toBe(ImageFilterPattern.random);
  });

  it('should set image rectangle', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    service.loadImage("NoKassenBon_9.jpg");    
    service.ImageRect = service.createImageRect(service.ImageData);
    expect(service.ImageRect).toBeDefined();
    expect(service.ImageRect.UntenLinks).toBeDefined();
    expect(service.ImageRect.ObenRechts).toBeDefined();
    expect(service.ImageRect.UntenLinks.x).toBe(0);
    expect(service.ImageRect.ObenRechts.y).toBe(0);
    expect(service.ImageRect.UntenLinks.y).toBe(service.ImageData.height);
    expect(service.ImageRect.ObenRechts.x).toBe(service.ImageData.width);
  });

  it('should set pattern Rectangle in Image Rectangle', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    service.loadImage("NoKassenBon_9.jpg");    
    service.ImageRect = service.createImageRect(service.ImageData);
    const patternRect: PixelRect = {
      UntenLinks: {
        x: 10,
        y: 45
      },
      ObenRechts: {
        x: 35,
        y: 15
      }
    }
    service.setPatternRect(patternRect);
    expect(service.PatternRect).toBeDefined();
    expect(service.PatternRect.UntenLinks).toBeDefined();
    expect(service.PatternRect.ObenRechts).toBeDefined();
    expect(service.PatternRect.UntenLinks.x).toBe(patternRect.UntenLinks.x);
    expect(service.PatternRect.ObenRechts.y).toBe(patternRect.ObenRechts.y);
    expect(service.PatternRect.UntenLinks.y).toBe(patternRect.UntenLinks.y);
    expect(service.PatternRect.ObenRechts.x).toBe(patternRect.ObenRechts.x);

    service.PatternRect = null;
    
    service.PatternRect = service.createPatternRect(10, 45, 35, 15);
    expect(service.PatternRect).toBeDefined();
    expect(service.PatternRect.UntenLinks).toBeDefined();
    expect(service.PatternRect.ObenRechts).toBeDefined();
    expect(service.PatternRect.UntenLinks.x).toBe(10);
    expect(service.PatternRect.ObenRechts.y).toBe( 45);
    expect(service.PatternRect.UntenLinks.y).toBe(35);
    expect(service.PatternRect.ObenRechts.x).toBe(15);
  });

  it('Transform PatternCoordinates in ImageCoordinates', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    service.loadImage("NoKassenBon_9.jpg");    
    service.ImageRect = service.createImageRect(service.ImageData);
    const patternRect: PixelRect = {
      UntenLinks: {
        x: 10,
        y: 45
      },
      ObenRechts: {
        x: 35,
        y: 15
      }
    }
    service.setPatternRect(patternRect);

    const patternPoint: PixelPoint = {
      x: 10,
      y: 10
    };

    const patternPoint2: PixelPoint = {
      x: 0,
      y: 0
    };

    const imagePoint: PixelPoint = service.getImagePointFromPatternPoint(patternPoint);
    expect(imagePoint.x).toEqual(20);
    expect(imagePoint.y).toEqual(25);

    const imagePoint2: PixelPoint = service.getImagePointFromPatternPoint(patternPoint2);
    expect(imagePoint2.x).toEqual(10);
    expect(imagePoint2.y).toEqual(15);
  });

  it('get pixeldata of transformed patternCoord ', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    service.loadImage("NoKassenBon_9.jpg");    
    service.ImageRect = service.createImageRect(service.ImageData);
    const patternRect: PixelRect = {
      UntenLinks: {
        x: 10,
        y: 45
      },
      ObenRechts: {
        x: 35,
        y: 15
      }
    }
    service.setPatternRect(patternRect);

    const patternPoint: PixelPoint = {
      x: 10,
      y: 10
    };

    const patternPoint2: PixelPoint = {
      x: 0,
      y: 0
    };

    const imagePoint: PixelPoint = service.getImagePointFromPatternPoint(patternPoint);
    expect(imagePoint.x).toEqual(20);
    expect(imagePoint.y).toEqual(25);

    const imagePoint2: PixelPoint = service.getImagePointFromPatternPoint(patternPoint2);
    expect(imagePoint2.x).toEqual(10);
    expect(imagePoint2.y).toEqual(15);

    const pixelData1: PixelData = service.getPixelDataFromImagePoint(imagePoint);
    expect(pixelData1).toBeDefined();

    const pixelData2: PixelData = service.getPixelDataFromImagePoint(imagePoint2);
    expect(pixelData2).toBeDefined();
  });

  it('get PixelData from PatternPoint', () => {
    const service: PixelOfImageService = TestBed.get(PixelOfImageService);
    service.loadImage("NoKassenBon_9.jpg");    
    service.ImageRect = service.createImageRect(service.ImageData);
    const patternRect: PixelRect = {
      UntenLinks: {
        x: 10,
        y: 45
      },
      ObenRechts: {
        x: 35,
        y: 15
      }
    }
    service.setPatternRect(patternRect);

    const patternPoint: PixelPoint = {
      x: 10,
      y: 10
    };

    const patternPoint2: PixelPoint = {
      x: 0,
      y: 0
    };


    const pixelData1: PixelData = service.getPixelDataFromPatternPoint(patternPoint);
    expect(pixelData1).toBeDefined();

    const pixelData2: PixelData = service.getPixelDataFromPatternPoint(patternPoint2);
    expect(pixelData2).toBeDefined();
  })

  
});


