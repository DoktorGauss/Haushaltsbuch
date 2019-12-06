import { NeuralNetworkGPU} from 'brain.js';
import { Injectable } from '@angular/core';
import { ImageHandlerService } from './image-handler.service';
import { NetSaferService } from './net-safer.service';

@Injectable({
  providedIn: 'root'
})
export class OcrNetService {


  // Image Processing Nets:
  isKassenZettel_NN: NeuralNetworkGPU;
  isHerkunft_NN: NeuralNetworkGPU;
  isData_NN: NeuralNetworkGPU;
  lineFinder_NN: NeuralNetworkGPU;
  // image to char NN 
  lineReader_NN: NeuralNetworkGPU;
  // char[] => SecondaryKey
  doElementize_NN: NeuralNetworkGPU;
  letterFinder_NN: NeuralNetworkGPU;

  public callNetLoop(imageData: number[]) {
    return this.doOCR(imageData);
  }

  private doOCRIteration(imageData: number[], net: NeuralNetworkGPU) {
    const Cluster: number[] = this.imageHandler.getKMean(imageData, 100);
    const Output: number[] = net.run(Cluster);
    var ActivatedOutput: number[] = [];
    Output.forEach((element, index) => element > 0.5 ? ActivatedOutput.push(index) : null);
    const ImageData_1: number[] = this.imageHandler.getSubClusterSet(imageData, Cluster, ActivatedOutput);
    return { ActivatedOutput, ImageData_1, Output, Cluster };
  }

  public doOCR(imageData: number[]){
    const OCR_1 = this.doOCRIteration(imageData, this.isKassenZettel_NN);
    if(OCR_1.ActivatedOutput.length > 0){
      const OCR_2 = this.doOCRIteration(OCR_1.ImageData_1, this.isHerkunft_NN);
      const OCR_3 = this.doOCRIteration(OCR_1.ImageData_1, this.isData_NN);
      if(OCR_2.ActivatedOutput.length > 0){
        const OCR_4 = this.doOCRIteration(OCR_2.ImageData_1, this.lineFinder_NN);
        const OCR_6 = this.Reading(OCR_4);
        return {category: 'Herkunft', value: OCR_6};
      }
      if(OCR_3.ActivatedOutput.length > 0){
        const OCR_4 = this.doOCRIteration(OCR_3.ImageData_1, this.lineFinder_NN);
        const OCR_6 = this.Reading(OCR_4);
        return {category: 'ProduktPreis', value: OCR_6};
      }
    }
  }
  private Reading(OCR_4: { ActivatedOutput: number[]; ImageData_1: number[]; Output: number[]; Cluster: number[]; }) {
    if (OCR_4.ActivatedOutput.length > 0) {
      const OCR_5 = this.doOCRIteration(OCR_4.ImageData_1, this.letterFinder_NN);
      if (OCR_5.ActivatedOutput.length > 0) {
        const OCR_6 = this.doReadingLetters(OCR_5.ImageData_1, OCR_5.Cluster, this.lineReader_NN);
        return OCR_6;
      }
    }
  }

  doReadingLetters(imageData: number[], cluster: number[], net: NeuralNetworkGPU) {
    var letters = [];
    cluster.forEach(element => {
      const imageData_1 = this.imageHandler.getSubClusterSet(imageData,cluster, [element]);
      const Cluster: number[] = this.imageHandler.getKMean(imageData, 25);
      const Output: number[] = net.run(Cluster);
      var ActivatedOutput: number = Output.findIndex( e => e == Output.reduce( (a,b) => Math.max(a,b)));
      letters.push(ActivatedOutput);
    });
    return letters;
  }
  public init() {
    this.imageHandler.init();
    this.isKassenZettel_NN.fromJSON(this.netSafer.getNetAsJSON('isKassenZettel_NN'));
    this.isHerkunft_NN.fromJSON(this.netSafer.getNetAsJSON('isHerkunft_NN'));
    this.isData_NN.fromJSON(this.netSafer.getNetAsJSON('isData_NN'));
    this.lineFinder_NN.fromJSON(this.netSafer.getNetAsJSON('lineFinder_NN'));
    this.lineReader_NN.fromJSON(this.netSafer.getNetAsJSON('lineReader_NN'));
    this.doElementize_NN.fromJSON(this.netSafer.getNetAsJSON('doElementize_NN'));
  }

  public safe() {
    this.imageHandler.clear();
    this.netSafer.safeNetAsJSON(this.isKassenZettel_NN.toJSON());
    this.netSafer.safeNetAsJSON(this.isHerkunft_NN.toJSON());
    this.netSafer.safeNetAsJSON(this.isData_NN.toJSON());
    this.netSafer.safeNetAsJSON(this.doElementize_NN.toJSON());
    this.netSafer.safeNetAsJSON(this.lineFinder_NN.toJSON());
    this.netSafer.safeNetAsJSON(this.lineReader_NN.toJSON());
  }
  constructor(private imageHandler: ImageHandlerService, private netSafer: NetSaferService) { }
}