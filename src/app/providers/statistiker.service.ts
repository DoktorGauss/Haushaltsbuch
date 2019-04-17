import { MatCheckboxModule } from '@angular/material';
import { Injectable } from '@angular/core';
import * as ss from 'simple-statistics'
import regression from 'regression';
import * as math from 'mathjs';
import * as cholesky from 'ndarray-cholesky-factorization'
@Injectable({
  providedIn: 'root'
})
export class StatistikerService {

  constructor() { }

  public calcMean(x: number[]): number {
    const returner: number = ss.mean(x);
    return returner;
  }

  public calcVar(x: number[]): number{
    return ss.variance(x);
  }

  public calcStdDev(x: number[]) {
    return ss.standardDeviation(x);
  }

  public getMin(x: number[]) {
    return ss.min(x);
  }

  public getMax(x: number[]) {
    return ss.max(x);
  }

  public calcMonteCarlo(T0: Date, T1: Date, x: number[]) {
    const start = T0.getTime();
    const end = T0.getTime();
    const time = (end - start) / (86400000);

    const numOfSimulations = 1000;




  }
// meanFunction: (z: number[]) => number, covarianceFunction: (x: number[], y: number[]) => number,

  public GaussProzess( X: number[] , F: number[], meanfunction: (x:number[]) => number = null, covarianceFuntion: (x:number [], y:number[]) =>number = null): void {
    if(X.length == F.length){
      const n = X.length; 
      const mean = this.calcMean(F);
      debugger;
      var K: number[][] = this.createK2D(X, F);
      var L: number[][] = [];
      L = cholesky(K,L);
      const m = 1000;
      const randWalks =  this.randomWalk(m, { erwartungswert: mean , stdAbweichung: K});
      

    }  
  }



  private createK2D(X: number[], F: number[]) {
    var K: number[][] = [];
    for (let i = 0; i < X.length; i++) {
      const X_i: number[] = [X[i], F[i]];
      var K_i = [];
      for (let j = 0; j < X.length; j++) {
        const X_j: number[] = [X[j], F[j]];
        K_i.push(this.kernel(X_i, X_j));
        // const elementJ = X[j];
        // K_i.push( math.exp( (-1/2) * (elementI - elementJ)*(elementI-elementJ)));
      }
      K.push(K_i);
    }
    return K;
  }

  public kernel(X1: number[], X2: number[]): number {
    var returner: number;

    if( X1.length == X2.length ) {
      const n = X1.length;
      var sqDist:number = 0;
      for (let i = 0; i < n; i++) {
        const dist_i = (X1[i] - X2[i]);
        sqDist += Number(dist_i*dist_i) ;
      }
      return math.exp(-0.5 * sqDist);
    }
    return -1;
  }

  public cov(x: number[], y: number[]): number {
    if (x.length == y.length) {
      let xy: number[] = []; // X*Y Array
      for (let i = 0; i < x.length; i++) {
        const x_e = x[i];
        const y_e = y[i];

        xy.push(x_e * y_e);
      }
      // Cov(x,y) = E(xy) - E(x)*E(y)
      return (ss.mean(xy)) - (ss.mean(x) * ss.mean(y));
    }
  }

  public LinearRegression(x: number[], f: number[]) {

    var dataArray: any[] = [];
    if (x.length == f.length) {
      for (let i = 0; i < x.length; i++) {
        const ex = x[i];
        const ef = f[i];

        dataArray.push([ex, ef]);

      }
    }
    return regression.linear(dataArray, { order: 2, precision: 5 });
  }

  public PolynomialRegression(x: number[], f: number[]) {
    var dataArray: any[] = [];
    if (x.length == f.length) {
      for (let i = 0; i < x.length; i++) {
        const ex = x[i];
        const ef = f[i];

        dataArray.push([ex, ef]);

      }
    }
    return regression.polynomial(dataArray, { order: 10, precision: 5 });
  }

  private covSE(xi: number, xj: number) {
    const sigma_f_squared = 1;
    const lenght = 0.1;

    return sigma_f_squared * math.exp(-(math.abs(xi - xj) ^ 2) / (2 * lenght * lenght));
  }


  private randomWalk(n: number, parameter: randomWalkParameter) {
    const mu: number = parameter.erwartungswert ? parameter.erwartungswert : 0;
    const sigma: number[][] = parameter.stdAbweichung ? parameter.stdAbweichung : null;
    var returner: number[] = [];
    for (let i = 0; i < n; i++) {
      const val = mu + sigma * Math.random();
      returner.push(val);
    }
    return returner;
  }

  private randn(): number {
    var u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

}

interface randomWalkParameter {

  erwartungswert: number;
  stdAbweichung: number[][];
}

interface gaussProzessParameter{
  Data: number[][];
} 