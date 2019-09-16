import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixelOfImageService {
  getImagePointFromPatternPoint(patternPoint: PixelPoint): PixelPoint {
    throw new Error("Method not implemented.");
  }
  createPatternRect(arg0: number, arg1: number, arg2: number, arg3: number): any {
    throw new Error("Method not implemented.");
  }
  setPatternRect(patternRect: PixelRect): any {
    throw new Error("Method not implemented.");
  }

  PatternRect: any;
  createImageRect(ImageData: any): any {
    throw new Error("Method not implemented.");
  }
  FilterPattern: any;
  ImageRect: any;
  setPattern(all: ImageFilterPattern) {
    throw new Error("Method not implemented.");
  }
  ImageData: any;
  loadImage(arg0: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
enum ImageFilterPattern{
  crosshairs,
  random,
  block,
  all
}

interface PixelRect {
  UntenLinks: PixelPoint;
  ObenRechts: PixelPoint;
}

interface PixelPoint {
  x: number;
  y: number;
}


interface ImageData{
  rgba_pixels : any[];
  width: number;
  height: number;
}