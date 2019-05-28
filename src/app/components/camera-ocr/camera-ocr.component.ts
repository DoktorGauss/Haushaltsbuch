import { WebcamComponent } from 'src/app/modules/webcam/webcam.component';
import { WebcamUtil } from './../../modules/webcam/util/webcam.util';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { NeuralNetwork } from 'brain.js';


@Component({
  selector: 'app-camera-ocr',
  templateUrl: './camera-ocr.component.html',
  styleUrls: ['./camera-ocr.component.css']
})
export class CameraOCRComponent implements OnInit, AfterViewInit {

  @ViewChild('Video') WebCam: WebcamComponent;
  IsKassenZettel_NN: NeuralNetwork;
  video = document.getElementById("video"); // added for clarity: this is needed
  i = 0;

  constructor() {
    this.initNeuralNetworks();
  }

  initNeuralNetworks() {
    // provide optional config object, defaults shown.
    const config = {
      inputSize: 500,
      hiddenLayers: [20, 20],
      outputSize: 1,
      learningRate: 0.01,
      decayRate: 0.999,
      activation: 'sigmoid'
    };

    this.IsKassenZettel_NN = new NeuralNetwork(config);
  }

  // toggle webcam on/off

  @Input() public showWebcam = true;
  @Input() public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  @Input() public deviceId: string;

  @ViewChild('pic1') image1;
  @ViewChild('pic2') image2;
  @ViewChild('pic3') image3;


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
      this.trainKassenBonNetwork();
    }, 1000);
  }
  trainKassenBonNetwork() {
    // var image1 = new Image();
    // image1.src = './../../assets/LearningData/IsKassenBong/Kassonbon_1.jpg';
    // var image2: WebcamImage = new WebcamImage('./../../assets/LearningData/IsKassenBong/Kassonbon_1.jpg', 'jpg', null);

    
    // var img: any = document.getElementById('pic1');
    var pixelData1 = this.getImageData(this.image1.nativeElement);
    var pixelData2 = this.getImageData(this.image2.nativeElement);
    var pixelData3 = this.getImageData(this.image3.nativeElement);
    var pixelData1TrainData = this.GetValuesOfRandomPixelInImage(pixelData1.data);
    var pixelData2TrainData = this.GetValuesOfRandomPixelInImage(pixelData2.data);
    var pixelData3TrainData = this.GetValuesOfRandomPixelInImage(pixelData3.data);

    this.IsKassenZettel_NN.train([
      { input: pixelData1TrainData, output: [1] },
      { input: pixelData2TrainData, output: [1] },
      { input: pixelData3TrainData, output: [0] }
    ]);
    

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
    console.log('received webcam image', webcamImage);
    const imageData = webcamImage.imageData.data;
    // const length = imageData.length;
    // var index = 0;

    var ColorValuesForNeuralNet : number[] = [];

    ColorValuesForNeuralNet = this.GetValuesOfRandomPixelInImage(imageData);
    var isKassenZettel = this.IsKassenZettel_NN.run(ColorValuesForNeuralNet);
    this.webcamImage = webcamImage;
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
