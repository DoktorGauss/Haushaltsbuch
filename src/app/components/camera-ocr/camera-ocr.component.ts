import { FarbMenge, MaßOfRGBService, RGBMenge } from './../../providers/maßof-rgb.service';
import { WebcamComponent } from 'src/app/modules/webcam/webcam.component';
import { WebcamUtil } from './../../modules/webcam/util/webcam.util';
import { Component, OnInit, Input, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { OcrNetService } from './services/ocr-net.service';


@Component({
  selector: 'app-camera-ocr',
  templateUrl: './camera-ocr.component.html',
  styleUrls: ['./camera-ocr.component.css']
})
export class CameraOCRComponent implements OnInit, AfterViewInit {
    @ViewChild('Video') WebCam: WebcamComponent;
  bCanTriggerSnapShot: boolean = true;
  elapsedOCRTime: number;

  currentOCR: any[] = [];

  constructor(
    private netSerive: OcrNetService,
    private maßOfRGBService: MaßOfRGBService
  ) {
    
  }
  
  ngOnInit() {
    this.netSerive.init();
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  public ngAfterViewInit(): void {
    this.WebCam.captureImageData = true;
  }
  
  triggerImage(imageData: any) {
    this.currentOCR.push(this.netSerive.callNetLoop(imageData));
  }


     @ViewChild('SnapShot') snapShot;
     @Input() public showWebcam = true;
     @Input() public allowCameraSwitch = true;
     @Input() public deviceId: string;


    video = document.getElementById("video"); // added for clarity: this is needed
    public multipleWebcamsAvailable = false;
    public videoOptions: MediaTrackConstraints = {
      width: { ideal: 100 },
      height: { ideal: 100 }
    };
    public errors: WebcamInitError[] = [];
    public webcamImage: WebcamImage = null;
    public captureImageData: boolean = true;
    private trigger: Subject<void> = new Subject<void>();
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

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
      if(this.elapsedOCRTime < 10) {
        
      }
      setTimeout(() => {
          this.triggerSnapshot();
      }, 33);
    }

    public toggleWebcam(): void {
      this.showWebcam = !this.showWebcam;
    }


    public handleInitError(error: WebcamInitError): void {
      this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {
      // true => move forward through devices
  //     // false => move backwards through devices
  //     // string => move to device with given deviceId
      this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
      console.log('received webcam image', webcamImage);
      const imageData = webcamImage.imageData.data;
      this.webcamImage = webcamImage;
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

    public OCR(){
      this.bCanTriggerSnapShot = false;
    }

}