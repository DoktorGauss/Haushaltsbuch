 export enum ImageFilterPattern{
    crosshairs,
    random,
    block,
    all
  }
  
  export interface PixelRect {
    UntenLinks: PixelPoint;
    ObenRechts: PixelPoint;
  }
  
  export interface PixelPoint {
    x: number;
    y: number;
  }
  
  export interface ImageData{
    rgba_pixels : any[];
    width: number;
    height: number;
  } 
  
  export interface PixelData {
    r: number;
    g: number;
    b: number;
    a: number;
  }