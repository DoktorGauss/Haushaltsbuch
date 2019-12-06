import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {
  getSubClusterSet(imageData: number[], othCluster: number[], arg2: number[]): number[] {
    throw new Error("Method not implemented.");
  }
  getKMean(imageData: any, arg1: number): number[] {
    throw new Error("Method not implemented.");
  }
  clear() {
    throw new Error("Method not implemented.");
  }
  get500Mean(imageData: any, preFilter ?: any): number[] {
    throw new Error("Method not implemented.");
  }
  init() {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
