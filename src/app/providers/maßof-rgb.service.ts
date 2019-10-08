import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaßOfRGBService {
  
  public getPseudoMaßRGB(r: FarbMenge, g: FarbMenge , b: FarbMenge, factor: number = 1) {
    let maß: number = 0;
    if(r.wert >= 0 && g.wert >= 0 && b.wert >= 0){
      r.wert > 0 ? maß += (256*256) * r.wert : maß += 0;
      g.wert > 0 ? maß += (256) * g.wert : maß += 0;
      maß += b.wert;
      maß *= factor;
    }
    return maß;
  }

  public getMaßRGB(r: FarbMenge, g: FarbMenge , b: FarbMenge) {
    return this.getPseudoMaßRGB(r,g,b, (1/(256*256*256)));
  }

  constructor() { }
}


export interface FarbMenge{
  wert: number;
  min : 0;
  max : 255;
}

export interface RGBMenge{
  r: FarbMenge;
  g: FarbMenge;
  b: FarbMenge;
}


