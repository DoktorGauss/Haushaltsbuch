import { Injectable } from '@angular/core';
import * as ss from 'simple-statistics'


@Injectable({
  providedIn: 'root'
})
export class StatistikerService {

  constructor() { }

  public calcMean(x : number[]){
    return ss.mean(x);
  }

  public calcVar(x : number[]){
    return ss.variance(x);
  }

  public calcStdDev(x: number[]){
    return ss.standardDeviation(x);
  }


  
}
