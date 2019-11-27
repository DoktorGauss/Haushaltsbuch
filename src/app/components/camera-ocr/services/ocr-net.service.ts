import { NeuralNetwork, NeuralNetworkActivation, NeuralNetworkGPU, INeuralNetworkTrainingOptions } from 'brain.js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcrNetService {

  isKassenZettel_NN: NeuralNetworkGPU;
  doCategorize_NN: NeuralNetworkGPU;
  lineFinder_NN: NeuralNetworkGPU;
  lineReader_NN: NeuralNetworkGPU;
  doElementize_NN: NeuralNetworkGPU;

  input: any;
  output: number[];
  callNetLoop(imageData: any) {
    // throw new Error("Method not implemented.");
  }
  init() {
    // throw new Error("Method not implemented.");
  }

  constructor() { }
}



interface OCR_NN{
}
