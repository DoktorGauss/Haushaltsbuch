import { WebcamUtil } from './../../modules/webcam/util/webcam.util';
import { Component, OnInit, Input } from '@angular/core';
import { WebcamInitError, WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';




@Component({
  selector: 'app-camera-ocr',
  templateUrl: './camera-ocr.component.html',
  styleUrls: ['./camera-ocr.component.css']
})
export class CameraOCRComponent implements OnInit {

  constructor() { 
  }

 
   // toggle webcam on/off
   
   @Input() public showWebcam = true;
   @Input() public allowCameraSwitch = true;
   public multipleWebcamsAvailable = false;
   @Input() public deviceId: string;
   public videoOptions: MediaTrackConstraints = {
     // width: {ideal: 1024},
     // height: {ideal: 576}
   };
   public errors: WebcamInitError[] = [];
 
   // latest snapshot
   public webcamImage: WebcamImage = null;
 
   // webcam snapshot trigger
   private trigger: Subject<void> = new Subject<void>();
   // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
   private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();
 
   public ngOnInit(): void {
     WebcamUtil.getAvailableVideoInputs()
       .then((mediaDevices: MediaDeviceInfo[]) => {
         this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
       });
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
 
   public showNextWebcam(directionOrDeviceId: boolean|string): void {
     // true => move forward through devices
     // false => move backwards through devices
     // string => move to device with given deviceId
     this.nextWebcam.next(directionOrDeviceId);
   }
 
   public handleImage(webcamImage: WebcamImage): void {
     console.log('received webcam image', webcamImage);
     debugger;
     this.webcamImage = webcamImage;
   }
 
   public cameraWasSwitched(deviceId: string): void {
     console.log('active device: ' + deviceId);
     this.deviceId = deviceId;
   }
 
   public get triggerObservable(): Observable<void> {
     return this.trigger.asObservable();
   }
 
   public get nextWebcamObservable(): Observable<boolean|string> {
     return this.nextWebcam.asObservable();
 }
}
