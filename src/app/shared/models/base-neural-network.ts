import { NeuralNetworkGPU, INeuralNetworkOptions } from 'brain.js';

export class BaseNeuralNetwork extends NeuralNetworkGPU {
    name: string;

    activation: [] = [];

    constructor(options?: INeuralNetworkOptions, activation?: number[]){
        super(options);
        var sumActivation: number = 0;
    }
}
