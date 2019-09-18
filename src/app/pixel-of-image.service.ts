import { PixelPoint, PixelData, PixelRect, ImageFilterPattern } from './models/ImageData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixelOfImageService {
  getPixelDataFromPatternPoint(patternPoint: PixelPoint): PixelData {
    throw new Error("Method not implemented.");
  }
  getPixelDataFromImagePoint(imagePoint: PixelPoint): PixelData {
    throw new Error("Method not implemented.");
  }
  loadImageByAPIID(arg0: number, arg1: string) {
    throw new Error("Method not implemented.");
  }
  loadImageByAPI(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
  getImagePointFromPatternPoint(patternPoint: PixelPoint): PixelPoint {
    throw new Error("Method not implemented.");
  }
  createPatternRect(arg0: number, arg1: number, arg2: number, arg3: number): any {
    throw new Error("Method not implemented.");
  }
  setPatternRect(patternRect: PixelRect): any {
    throw new Error("Method not implemented.");
  }

  PatternRect: PixelRect;

  createImageRect(ImageData: any): any {
    throw new Error("Method not implemented.");
  }
  
  FilterPattern: ImageFilterPattern;
  
  ImageRect: PixelRect;

  setPattern(all: ImageFilterPattern) {
    throw new Error("Method not implemented.");
  }
  ImageData: any;
  loadImage(arg0: string) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}