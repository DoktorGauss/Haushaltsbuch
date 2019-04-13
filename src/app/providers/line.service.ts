import { Injectable } from '@angular/core';
import { StatistikerService } from './statistiker.service';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor(private statistiker: StatistikerService){ }
  
  public createChart(div: HTMLDivElement, X: number[], Y: number[]): HTMLDivElement[]{
    var x: number[] = this.transformToDivCoordinates(div,X, "x");
    var y: number[] = this.transformToDivCoordinates(div,Y,"y");

    return this.createLineSegments(x,y);
  }
  private transformToDivCoordinates(div: HTMLDivElement, X: number[], arg2: string): number[] {
    const divWidth = div.clientWidth;
    const divHeight = div.clientHeight;
    if( arg2 == "x"){
      // width is a normal linear transformation  
      return this.statisticTransform(0, divWidth, X);

    } else {
      return this.statisticTransform(0, divHeight, X);
    }

    throw new Error("Method not implemented.");
  }

  private statisticTransform(t_min, t_max, x: number[]): number[]{
    const x_mean = this.statistiker.calcMean(x);
    const x_min = this.statistiker.getMin(x);
    const x_max = this.statistiker.getMax(x);
    const t_mid = (t_max + t_min)/2;

    var X: number[] = [];
    for (let index = 0; index < x.length; index++) {
      const x_i = x[index];
      var t: number;
      if( x_i > x_mean){
        t = t_mid - (((x_i - x_mean)/(x_max - x_mean))*(t_mid));
      } else if( x_i < x_mean) {
        t = t_mid - (((x_i - x_mean)/(x_mean - x_min))*(t_mid));      
      } else {
        t = t_mid;
      }
      X.push(t);
    }
    return X;
  }
  
  private createLineSegments(x : number[], y : number[]) : HTMLDivElement[]{
    var Returner: HTMLDivElement[] = [];
    if(x.length == y.length){
      for (let index = 0; index < x.length - 1; index++) {
        const X1 = x[index];
        const X2 = x[index + 1];
        const Y1 = y[index];
        const Y2 = y[index + 1];

        
        Returner.push(this.createLine(X1,Y1, X2,Y2));
      }
    } else {
      console.log("Punkte sind nicht gleich lang!");
    }
    return Returner;
  }
  private createLineElement(x, y, length, angle): HTMLDivElement{
    var line = document.createElement("div");
    var styles = 'border: 0.5pt  solid black; '
      + 'width: ' + length + 'px; '
      + 'height: 0; '
      + '-moz-transform: rotate(' + angle + 'rad); '
      + '-webkit-transform: rotate(' + angle + 'rad); '
      + '-o-transform: rotate(' + angle + 'rad); '
      + '-ms-transform: rotate(' + angle + 'rad); '
      + 'position: absolute; '
      + 'top: ' + y + 'px; '
      + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
  }

  private createLineElementByType(x, y, length, angle, type): HTMLDivElement{
    var line = document.createElement("div");
    var styles = 'border: 0.5pt ' + type + ' black; '
      + 'width: ' + length + 'px; '
      + 'height: 0; '
      + '-moz-transform: rotate(' + angle + 'rad); '
      + '-webkit-transform: rotate(' + angle + 'rad); '
      + '-o-transform: rotate(' + angle + 'rad); '
      + '-ms-transform: rotate(' + angle + 'rad); '
      + 'position: absolute; '
      + 'top: ' + y + 'px; '
      + 'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
  }
  public createLine(x1, y1, x2, y2) {
    console.log( "(x1,y1) = (" + x1 + ',' + y1 + ') ; (x2,y2) = (' + x2 + ',' + y2 + ')');
    var a = x1 - x2,
      b = y1 - y2,
      c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
      sy = (y1 + y2) / 2;

    var x = sx - c / 2,
      y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return this.createLineElement(x, y, c, alpha);
  }

  public createLineByType(x1, y1, x2, y2, type) {
    console.log( "(x1,y1) = (" + x1 + ',' + y1 + ') ; (x2,y2) = (' + x2 + ',' + y2 + ')');
    var a = x1 - x2,
      b = y1 - y2,
      c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
      sy = (y1 + y2) / 2;

    var x = sx - c / 2,
      y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return this.createLineElementByType(x, y, c, alpha, type);
  }
}
