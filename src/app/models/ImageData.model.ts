 export enum ImageFilterPattern{
    crosshairs,
    random,
    block,
    all
  }
  
  export interface PixelRect {
    untenLinks: PixelPoint;
    obenRechts: PixelPoint;
  }
  
  export interface PixelPoint {
    x: number;
    y: number;
  }
  

  export interface PixelData {
    r: number;
    g: number;
    b: number;
    a: number;
  }