import { PixelPoint, PixelData, PixelRect, ImageFilterPattern } from './models/ImageData.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixelOfImageService {
  init() {
    throw new Error("Method not implemented.");
  }

  PatternRect: PixelRect;
  FilterPattern: ImageFilterPattern;
  ImageRect: PixelRect;
  ImageData: ImageData;


  getPixelDataFromPatternPoint(patternPoint: PixelPoint): PixelData {
    
    throw new Error("Method not implemented.");
  }
  getPixelDataFromImagePoint(imagePoint: PixelPoint): PixelData {
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


  createImageRect(ImageData: ImageData): any {
    throw new Error("Method not implemented.");
  }

  

  setPattern(all: ImageFilterPattern) {
    throw new Error("Method not implemented.");
  }
  
  loadImage(arg0: string) {
    throw new Error("Method not implemented.");
  }

  getImageData(image){
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  }
  
  loadImageByAPIID(arg0: number, arg1: string) {
    throw new Error("Method not implemented.");
  }
  loadImageByAPI(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }
  

  constructor() { }
}