import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaßOfRGBService {
  
  public getMaßRGB(r: farbMenge, g: farbMenge , b: farbMenge) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}


interface farbMenge{
  wert: number;
  min : 0;
  max : 255;
}

interface RGBMenge{
  // r: farbMenge;
  g: farbMenge;
  b: farbMenge;
}


