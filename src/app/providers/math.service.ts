import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }


  public matrixSkalarMultiplikation(M: number[][], lambda: number): number[][]{
    const n  = M.length;
    for (let i = 0; i < n; i++) {
      const m = M[i].length; 
      for (let j = 0; j < m; j++) {
        const element_i_j = M[i][j];
        M[i][j] = element_i_j * lambda;
      }
    }
    return M;
  }

}
