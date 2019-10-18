import { FarbMenge } from './../../providers/maßof-rgb.service';
import { WebcamComponent } from 'src/app/modules/webcam/webcam.component';
import { WebcamUtil } from './../../modules/webcam/util/webcam.util';
import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { NeuralNetwork, NeuralNetworkActivation, NeuralNetworkGPU, INeuralNetworkTrainingOptions } from 'brain.js';
import { MaßOfRGBService } from 'src/app/providers/maßof-rgb.service';


@Component({
  selector: 'app-camera-ocr',
  templateUrl: './camera-ocr.component.html',
  styleUrls: ['./camera-ocr.component.css']
})
export class CameraOCRComponent implements OnInit, AfterViewInit {
  @ViewChild('Video') WebCam: WebcamComponent;
  @ViewChild('LD_Yes_1') LD_Yes_1;
  @ViewChild('LD_Yes_2') LD_Yes_2;
  @ViewChild('LD_Yes_3') LD_Yes_3;
  @ViewChild('LD_Yes_4') LD_Yes_4;
  @ViewChild('LD_Yes_5') LD_Yes_5;
  @ViewChild('LD_Yes_6') LD_Yes_7;
  @ViewChild('LD_Yes_7') LD_Yes_6;
  @ViewChild('LD_No_1') LD_No_1;
  @ViewChild('LD_No_2') LD_No_2;
  @ViewChild('LD_No_3') LD_No_3;
  @ViewChild('LD_No_4') LD_No_4;
  @ViewChild('LD_No_5') LD_No_5;
  @ViewChild('LD_No_6') LD_No_6;
  @ViewChild('LD_No_7') LD_No_7;
  @ViewChild('SnapShot') snapShot;
  @Input() public showWebcam = true;
  @Input() public allowCameraSwitch = true;
  @Input() public deviceId: string;


  IsKassenZettel_NN: NeuralNetworkGPU;
  learnCOnfig: INeuralNetworkTrainingOptions;

  isKassenBonText: string = "";
  video = document.getElementById("video"); // added for clarity: this is needed
  i = 0;
  public multipleWebcamsAvailable = false;

  constructor(private maßOfRGBService: MaßOfRGBService) { }

  initNeuralNetworks() {
    // provide optional config object, defaults shown.
    const sigmoid: NeuralNetworkActivation = 'sigmoid';
    const relu: NeuralNetworkActivation = 'relu';

    const config = {
      inputSize: 1500,
      hiddenLayers: [50, 50, 50, 50, 50],
      outputSize: 1,
      learningRate: 0.01,
      decayRate: 0.999,
      activation: sigmoid
    };

    this.learnCOnfig = {
      iterations: 6000, // the maximum times to iterate the training data
      errorThresh: 0.005, // the acceptable error percentage from training data
      log: false, // true to use console.log, when a function is supplied it is used
      logPeriod: 10, // iterations between logging out
      learningRate: 0.31415, // multiply's against the input and the delta then adds to momentum
      momentum: 0.016180339887, // multiply's against the specified "change" then adds to learning rate for change
      callback: null, // a periodic call back that can be triggered while training
      callbackPeriod: 10, // the number of iterations through the training data between callback calls
      timeout: Infinity, // the max number of milliseconds to train for
      praxis: null
    };

    this.IsKassenZettel_NN = new NeuralNetworkGPU(config);
    this.trainKassenBonNetwork();
  }

  public videoOptions: MediaTrackConstraints = {
    width: { ideal: 100 },
    height: { ideal: 100 }
  };

  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  public captureImageData: boolean = true;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  public ngOnInit(): void {

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public ngAfterViewInit(): void {
    this.WebCam.captureImageData = true;
    this.WebCam.imageQuality = 0.99;
    this.WebCam.height = 500;
    this.WebCam.width = 500;
    setTimeout(() => {
      this.initNeuralNetworks();
    }, 1000);
  }

  trainKassenBonNetwork() {
    // debugger;
    var pixelYesData1 = this.getImageData(this.LD_Yes_1.nativeElement);
    var pixelYesData2 = this.getImageData(this.LD_Yes_2.nativeElement);
    var pixelYesData3 = this.getImageData(this.LD_Yes_3.nativeElement);
    var pixelYesData4 = this.getImageData(this.LD_Yes_4.nativeElement);
    var pixelYesData5 = this.getImageData(this.LD_Yes_5.nativeElement);
    var pixelYesData6 = this.getImageData(this.LD_Yes_6.nativeElement);
    var pixelYesData7 = this.getImageData(this.LD_Yes_7.nativeElement);


    var pixelNoData1 = this.getImageData(this.LD_No_1.nativeElement);
    var pixelNoData2 = this.getImageData(this.LD_No_2.nativeElement);
    var pixelNoData3 = this.getImageData(this.LD_No_3.nativeElement);
    var pixelNoData4 = this.getImageData(this.LD_No_4.nativeElement);
    var pixelNoData5 = this.getImageData(this.LD_No_5.nativeElement);
    var pixelNoData6 = this.getImageData(this.LD_No_6.nativeElement);
    var pixelNoData7 = this.getImageData(this.LD_No_7.nativeElement);

    console.log("Training start!");
    this.IsKassenZettel_NN.train([
      { input: this.GetPixelOfPattern(pixelYesData1.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData1.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData2.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData2.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData3.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelYesData2.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData3.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData4.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData4.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelNoData2.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData5.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData5.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData1.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelYesData6.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData6.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelNoData1.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] },
      { input: this.GetPixelOfPattern(pixelYesData7.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelYesData2.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [1] },
      { input: this.GetPixelOfPattern(pixelNoData7.data, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } }), output: [0] }
    ], this.learnCOnfig);
    console.log("Training End");
    console.log(this.IsKassenZettel_NN.toJSON());
  }

  getImageData(image) {
    console.log(image);
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  }

  public triggerSnapshot(): void {
    this.trigger.next();
    setTimeout(() => {
      this.triggerSnapshot();
    }, 33);
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public OCR(): void {
    const netAsJSON = this.IsKassenZettel_NN.toJSON();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {

    // console.log('received webcam image', webcamImage);
    // debugger;
    const imageData = webcamImage.imageData.data;
    this.webcamImage = webcamImage;
    // const length = imageData.length;
    // var index = 0;
   
    this.callNetLoop(imageData);
  }
  callNetLoop(imageData: Uint8ClampedArray) {
    var colorValuesForBonRecognition: number[] = [];
    colorValuesForBonRecognition = this.GetPixelOfPattern(imageData, 500, ImageFilterPattern.crosshairs, { UntenLinks: { x: 0, y: 0 }, ObenRechts: { x: 100, y: 100 } });
    var isKassenZettel = this.IsKassenZettel_NN.run(colorValuesForBonRecognition);
    console.log(isKassenZettel);
    if (isKassenZettel[0] > 0.6) {
      this.isKassenBonText = "Kassen Zettel wurde erkannt";
      document.getElementById("isKassenBonDiv").style.backgroundColor = "Green";
    } else {
      this.isKassenBonText = "Kassen Zettel wurde nicht erkannt";
      document.getElementById("isKassenBonDiv").style.backgroundColor = "Red";
    }
  }





  private GetPixelOfPattern(imageData: Uint8ClampedArray, anzahlPixel: number, order: ImageFilterPattern, imageRect: PixelRect) {
    var ColorValuesForNeuralNet: number[] = [];
    while (ColorValuesForNeuralNet.length < anzahlPixel) {
      switch (order) {
        case ImageFilterPattern.crosshairs: // crosshair like image in Onenote

          ColorValuesForNeuralNet = ColorValuesForNeuralNet.concat(this.GetMainDiagonalPixelsOfImage(imageData, 100, imageRect));
          ColorValuesForNeuralNet = ColorValuesForNeuralNet.concat(this.GetAntiDiagonalPixelsOfImage(imageData, 100, imageRect));
          ColorValuesForNeuralNet = ColorValuesForNeuralNet.concat(this.GetHorizontalPixelsOfImage(imageData, 100, imageRect));
          ColorValuesForNeuralNet = ColorValuesForNeuralNet.concat(this.GetVerticalPixelsOfImage(imageData, 100, imageRect));
          ColorValuesForNeuralNet = ColorValuesForNeuralNet.concat(this.GetRectanglePixelsOfImage(imageData, 100, imageRect));
          break;
        case ImageFilterPattern.block: // block = RECTANGLE

          break;

        case ImageFilterPattern.random: // random
          break;
        default:
          break;
      }
    }
    return ColorValuesForNeuralNet;
  }

  GetRectanglePixelsOfImage(imageData: Uint8ClampedArray, pixelCount: number, imageRect: PixelRect): number[] {
    var returner: number[] = [];
    const spaltenLaenge = 4;
    const zeilenLaenge = (imageRect.ObenRechts.x - imageRect.UntenLinks.x) * spaltenLaenge;
    const spaltenAnzahl = imageRect.ObenRechts.y - imageRect.UntenLinks.y;
    const zeilenAnzahl = imageRect.ObenRechts.x - imageRect.UntenLinks.x;
    const mittlereSpalte = Math.round(spaltenAnzahl / 2);
    const mittlereZeile = Math.round(zeilenAnzahl / 2);
    const obenLinks = [mittlereSpalte - 12, mittlereZeile - 12];
    const untenRechts = [mittlereSpalte + 12, mittlereZeile + 12];
    const streckenCount = Math.round(pixelCount / 4);
    // * 
    // .
    // .
    // .
    for (let index = 0; index < streckenCount; index++) {
      const i = obenLinks[0] + index;
      const jndex = obenLinks[1];
      // index == index ist die Diagonale (0,50), (1,50), (2,50), (3,50)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(i, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    // * .  .   . 
    // .
    // .
    // .
    for (let index = 0; index < streckenCount; index++) {
      const i = obenLinks[0];
      const jndex = obenLinks[1] + index;
      // index == index ist die Diagonale (0,50), (1,50), (2,50), (3,50)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(i, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    // * .  .   . .
    // .          .
    // .          .
    // .          *
    for (let index = 0; index < streckenCount; index++) {
      const i = untenRechts[0] - index;
      const jndex = untenRechts[1];
      // index == index ist die Diagonale (0,50), (1,50), (2,50), (3,50)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(i, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    // * .  .   . .
    // .          .
    // .          .
    // .  . . . . *
    for (let index = 0; index < streckenCount; index++) {
      const i = untenRechts[0];
      const jndex = untenRechts[1] - index;
      // index == index ist die Diagonale (0,50), (1,50), (2,50), (3,50)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(i, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    return returner;
  }

  GetVerticalPixelsOfImage(imageData: Uint8ClampedArray, pixelCount: number, imageRect: PixelRect): number[] {
    var returner: number[] = [];
    const spaltenLaenge = 4;
    const zeilenLaenge = (imageRect.ObenRechts.x - imageRect.UntenLinks.x) * spaltenLaenge;
    const spaltenAnzahl = (imageRect.ObenRechts.y - imageRect.UntenLinks.y);
    const mittlereSpalte = Math.round(spaltenAnzahl / 2);
    for (let index = 0; index < pixelCount; index++) {
      const jndex = mittlereSpalte;
      // index == index ist die Diagonale (0,50), (1,50), (2,50), (3,50)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(index, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    return returner;
  }
  GetHorizontalPixelsOfImage(imageData: Uint8ClampedArray, pixelCount: number, imageRect: PixelRect): number[] {
    var returner: number[] = [];
    const spaltenLaenge = 4;
    const zeilenLaenge = (imageRect.ObenRechts.x - imageRect.UntenLinks.x) * spaltenLaenge;
    const zeilenAnzahl = (imageRect.ObenRechts.x - imageRect.UntenLinks.x);
    const mittlereZeile = Math.round(zeilenAnzahl / 2);
    for (let index = 0; index < pixelCount; index++) {
      const jndex = mittlereZeile;
      // index == index ist die Diagonale (50,1), (50,2), (50,3), (50,4)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(jndex, index, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    return returner;
  }
  GetAntiDiagonalPixelsOfImage(imageData: Uint8ClampedArray, pixelCount: number, imageRect: PixelRect): number[] {
    var returner: number[] = [];
    const spaltenLaenge = 4;
    const zeilenLaenge = (imageRect.ObenRechts.x - imageRect.UntenLinks.x) * spaltenLaenge;

    const spaltenAnzahl = (imageRect.ObenRechts.y - imageRect.UntenLinks.y);
    for (let index = 0; index < pixelCount; index++) {
      const jndex = spaltenAnzahl - index;
      // index == index ist die Diagonale (0,100), (1,99), (2,98), (3,97)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(index, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      returner.push(maß);
    }
    return returner;
    throw new Error("Method not implemented.");
  }

  GetMainDiagonalPixelsOfImage(imageData: Uint8ClampedArray, pixelCount: number, imageRect: PixelRect): number[] {
    var returner: number[] = [];
    const spaltenLaenge = 4;
    const zeilenLaenge = (imageRect.ObenRechts.x - imageRect.UntenLinks.x) * spaltenLaenge;
    for (let index = 0; index < pixelCount; index++) {
      const jndex = index;
      // index == jndex ist die Diagonale (0,0), (1,1), (2,2), (3,3)
      const arrayIndex = this.getArrayIndexFromMatrixIndixes(index, jndex, zeilenLaenge, spaltenLaenge);
      const rot: FarbMenge = { wert: imageData[arrayIndex + 1], min: 0, max: 255 };
      const gelb: FarbMenge = { wert: imageData[arrayIndex + 2], min: 0, max: 255 };
      const blau: FarbMenge = { wert: imageData[arrayIndex + 3], min: 0, max: 255 };


      const maß = this.maßOfRGBService.getMaßRGB(rot, gelb, blau);
      // returner.push(imageData[arrayIndex+0] / 255.0); //r
      // returner.push(imageData[arrayIndex+1]); //g
      // returner.push(imageData[arrayIndex+2]); //b
      returner.push(maß);
    }
    return returner;
  }

  getArrayIndexFromMatrixIndixes(zeile: number, spalte: number, zeilenLaenge: number, spaltenLaenge: number) {
    return (zeile) * zeilenLaenge + (spalte) * spaltenLaenge;
  }



  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  // content is the data you'll write to file<br/>
  // filename is the filename<br/>
  // what I did is use iFrame as a buffer, fill it up with text
  private save_content_to_file(content, filename) {

  }
}



interface PixelRect {
  UntenLinks: PixelPoint;
  ObenRechts: PixelPoint;
}

interface PixelPoint {
  x: number;
  y: number;
}

// enum ImageFilterPattern = 'crosshrairs' | 'random' | 'block' | 'all';

enum ImageFilterPattern {
  crosshairs,
  random,
  block,
  all
}