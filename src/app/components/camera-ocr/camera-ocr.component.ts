import { WebcamComponent } from 'src/app/modules/webcam/webcam.component';
import { WebcamUtil } from './../../modules/webcam/util/webcam.util';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { NeuralNetwork, NeuralNetworkActivation } from 'brain.js';
import { ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-camera-ocr',
  templateUrl: './camera-ocr.component.html',
  styleUrls: ['./camera-ocr.component.css']
})
export class CameraOCRComponent implements OnInit, AfterViewInit {

  @ViewChild('Video') WebCam: WebcamComponent;
  IsKassenZettel_NN: NeuralNetwork;
  isKassenBonText: string = "";
  video = document.getElementById("video"); // added for clarity: this is needed
  i = 0;

  constructor() {
  }

  initNeuralNetworks() {
    // provide optional config object, defaults shown.
    const config = {
      inputSize: 500,
      hiddenLayers: [20, 20],
      outputSize: 1,
      learningRate: 0.01,
      decayRate: 0.999,
      // activation: 'sigmoid'
    };

    this.IsKassenZettel_NN = new NeuralNetwork(config);
    this.trainKassenBonNetwork();
  }

  // toggle webcam on/off

  @Input() public showWebcam = true;
  @Input() public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  @Input() public deviceId: string;

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
    this.WebCam.imageQuality = 0.9;
    this.WebCam.height = 500;
    this.WebCam.width = 500;
    setTimeout(() => {
      this.initNeuralNetworks();      
    }, 1000);
  }

  trainKassenBonNetwork() {
    var pixelYesData1  = this.getImageData(this.LD_Yes_1.nativeElement);
    var pixelYesData2  = this.getImageData(this.LD_Yes_2.nativeElement);
    var pixelYesData3  = this.getImageData(this.LD_Yes_3.nativeElement);
    var pixelYesData4  = this.getImageData(this.LD_Yes_4.nativeElement);
    var pixelYesData5  = this.getImageData(this.LD_Yes_5.nativeElement);
    var pixelYesData6  = this.getImageData(this.LD_Yes_6.nativeElement);
    var pixelYesData7  = this.getImageData(this.LD_Yes_7.nativeElement);


    var pixelNoData1  = this.getImageData(this.LD_No_1.nativeElement);
    var pixelNoData2  = this.getImageData(this.LD_No_2.nativeElement);
    var pixelNoData3  = this.getImageData(this.LD_No_3.nativeElement);
    var pixelNoData4  = this.getImageData(this.LD_No_4.nativeElement);
    var pixelNoData5 = this.getImageData(this.LD_No_5.nativeElement);
    var pixelNoData6 = this.getImageData(this.LD_No_6.nativeElement);
    var pixelNoData7 = this.getImageData(this.LD_No_7.nativeElement);

    // var pixelDataArrayYES = [pixelYesData1, pixelYesData2, pixelYesData3, pixelYesData4, pixelYesData5, pixelYesData6, pixelYesData7];
    // var pixelDataArrayNO = [pixelNoData1, pixelNoData2, pixelNoData3, pixelNoData4, pixelNoData5, pixelNoData6, pixelNoData7];


    this.IsKassenZettel_NN.train([
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData1.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData7.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData2.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData1.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData3.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData2.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData4.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData3.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData5.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData4.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData6.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData5.data), output: [0] },
      { input: this.GetValuesOfRandomPixelInImage(pixelYesData7.data), output: [1] },
      { input: this.GetValuesOfRandomPixelInImage(pixelNoData6.data), output: [0] }
    ])

  //   pixelDataArrayYES.forEach(element => {
  //      this.IsKassenZettel_NN.train([
  //         { input: this.GetValuesOfRandomPixelInImage(element.data), output: [1] }
  //      ]);
  //   });

  //   pixelDataArrayNO.forEach(element => {
  //     this.IsKassenZettel_NN.train([
  //        { input: this.GetValuesOfRandomPixelInImage(element.data), output: [0] }
  //     ]);
  //  });
  }

  getImageData(image) {

    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, image.width, image.height);

  }

  public triggerSnapshot(): void {
    this.trigger.next();

  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public OCR(): void {

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
    const imageData = webcamImage.imageData.data;
    this.webcamImage = webcamImage;
    // const length = imageData.length;
    // var index = 0;

    var ColorValuesForNeuralNet: number[] = [];

    ColorValuesForNeuralNet = this.GetValuesOfRandomPixelInImage(imageData);
    var isKassenZettel = this.IsKassenZettel_NN.run(ColorValuesForNeuralNet);
    console.log(isKassenZettel);
    if (isKassenZettel[0] > 0.5) {
      this.isKassenBonText = "Kassen Zettel wurde erkannt";
      document.getElementById("isKassenBonDiv").style.backgroundColor = "Green";
    } else {
      this.isKassenBonText = "Kassen Zettel wurde nicht erkannt";
      document.getElementById("isKassenBonDiv").style.backgroundColor = "Red";
    }
  }


  private GetValuesOfRandomPixelInImage(imageData: Uint8ClampedArray) {
    var ColorValuesForNeuralNet: number[] = [];
    var index = 0;
    var length = imageData.length;
    while (ColorValuesForNeuralNet.length < 500) {
      index = index + Math.floor((Math.random() * length) + 0);
      index = index % length;
      index = index - index % 4;
      if (index % 4 == 0) {
        const rot = imageData[index];
        const blau = imageData[index + 1];
        const gruen = imageData[index + 2];
        const alpha = imageData[index + 3];
        const normal_rot = this.normalizeColor(rot);
        const normal_blau = this.normalizeColor(blau);
        const normal_gruen = this.normalizeColor(gruen);
        const normal_alpha = this.normalizeColor(alpha);
        const metrik = ((normal_rot + normal_blau + normal_gruen + normal_alpha) / (4));
        ColorValuesForNeuralNet.push(metrik);
      }
    }
    return ColorValuesForNeuralNet;
  }


  private GetRandomPixelIn3FormsOfImage(imageData: Uint8ClampedArray, anzahlPixel: number) {
    var ColorValuesForNeuralNet: number[] = [];
    var index = 0;
    var length = imageData.length;
    var anzahlSpalten = Math.sqrt(length / 4);
    var anzahlZeilen = Math.sqrt(length / 4);
    while (ColorValuesForNeuralNet.length < anzahlPixel) {
      // 10% Random Pixel vom linken Rand
      while (ColorValuesForNeuralNet.length < anzahlPixel * 0.1) {
 
      }
      // 10%  Random Pixel vom rechten Rand
      while (ColorValuesForNeuralNet.length < anzahlPixel * 0.2) {

      }

      // 80% Random Pixel von Mitte
      index = index + Math.floor((Math.random() * length) + 0);
      index = index % length;
      index = index - index % 4;
      if (index % 4 == 0) {
        const rot = imageData[index];
        const blau = imageData[index + 1];
        const gruen = imageData[index + 2];
        const alpha = imageData[index + 3];
        const normal_rot = this.normalizeColor(rot);
        const normal_blau = this.normalizeColor(blau);
        const normal_gruen = this.normalizeColor(gruen);
        const normal_alpha = this.normalizeColor(alpha);
        const metrik = ((normal_rot + normal_blau + normal_gruen + normal_alpha) / (4));
        ColorValuesForNeuralNet.push(metrik);
      }
    }
    return ColorValuesForNeuralNet;
  }

  private getRandomPixelInRect(rect: PixelRect, pixelArray: Uint8ClampedArray, imageRect: PixelRect){

  }


  // setRedPixelOnPosition(index: number) {
  //   this.snapShot.nativeElement
  //   throw new Error("Method not implemented.");
  // }
  

  normalizeColor(color: number) {
    return (color) / (255);
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
}


interface PixelRect{
  UntenLinks: PixelPoint;
  ObenRechts: PixelPoint;
}

interface PixelPoint{
  x: number;
  y: number;
}