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

  public getMaßRGB_opposed(iMaß: number ){
    return this.getPseudoMaßRGB_opposed(iMaß, (256*256*256));
  }
  
  getPseudoMaßRGB_opposed(iMaß: number, iMaß_sup: number) {
    let pseudomaß = iMaß * iMaß_sup + 0;
    const blauWert = pseudomaß % 256;
    pseudomaß = pseudomaß - blauWert; 
    const gruenWert = pseudomaß % (256*256);
    pseudomaß = pseudomaß - gruenWert*(256);
    const rotWert = pseudomaß % (256*256*256);
    pseudomaß = pseudomaß - rotWert*(256*256);
    if(pseudomaß == 0) {
      return { r: {wert: rotWert, min: 0, max: 255} , g: {wert: gruenWert, min: 0, max: 255}, b: {wert: blauWert, min: 0, max: 255}};
    } else {
      throw new Error("Maß wurde falsch gesetzt oder verrechnet!");
    }
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


