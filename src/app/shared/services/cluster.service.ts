import { Injectable } from '@angular/core';
import { FarbMenge, RGBMenge, MaßOfRGBService } from 'src/app/providers/maßof-rgb.service';
import { debug } from 'util';
import { clearModulesForTest } from '@angular/core/src/linker/ng_module_factory_loader';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(private maßOfRGBService: MaßOfRGBService) { }

  oneDimensionalData: number[] = [];
  clusterData: number[] = [];

  getKMeansCluster(k: number, X: any, min: number, max: number): number[] {
    let C: number[] = ([...Array(k).fill(0)]); // k size array
    C = C.map(e => this.getRandomColorNormalized()); // fill it with random color
    let delta = 1; // store the delta
    let S: number[][] = []; // array for the color values each cluster
    for (let index = 0; index < C.length; index++) {
      const element = C[index];
      S.push([]);
    }
    // debugger; 	
    while (delta > 0.0005) {
      delta = 0;
      for (let index = 0; index < X.length; index = index + 4) {
        const rot: FarbMenge = { wert: X[index], min: 0, max: 255 };
        const gelb: FarbMenge = { wert: X[index + 1], min: 0, max: 255 };
        const blau: FarbMenge = { wert: X[index + 2], min: 0, max: 255 };
        const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
        let deltas: number[] = [];
        C.forEach(element => {
          deltas.push((element - maß) * (element - maß));
        });
        const min: number = Math.min(...deltas);
        const indexOfLowestVarianz = deltas.indexOf(min);
        S[indexOfLowestVarianz].push(maß);
      }
      let count = 0;
      delta = 0;
      S.map(e => {
        for (var i = 0, sum = 0; i < e.length; sum += e[i++]);
        const mittelwert = e.length == 0 ? 0 : ((sum) / e.length);
        delta += C[count] == 0 ? 0 : (C[count] - mittelwert)/C[count];
        C[count] = mittelwert;
        count++;
      });
      delta = delta/k;
    }
    return C;
  }

  getRandomColorNormalized(min: number = 0, max: number = 255): number {
    function random0255(min = 0, max = 255): number {
      return Math.random() * (max - min) + min
    }
    const rot: FarbMenge = { wert: random0255(), min: 0, max: 255 };
    const gelb: FarbMenge = { wert: random0255(), min: 0, max: 255 };
    const blau: FarbMenge = { wert: random0255(), min: 0, max: 255 };
    const maß: number = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
    return maß;
  }

  getClusterImage( cluster: number[], imageData: any){
    
  }
}



