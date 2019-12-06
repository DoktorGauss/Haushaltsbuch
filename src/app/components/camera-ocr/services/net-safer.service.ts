import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetSaferService {

  private localStorage: Storage;
  safeNetAsJSON(arg0: import("brain.js").INeuralNetworkJSON) {
    throw new Error("Method not implemented.");
  }
  getNetAsJSON(arg0: string): import("brain.js").INeuralNetworkJSON {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
