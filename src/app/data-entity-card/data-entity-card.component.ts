import { StatistikerService } from './../providers/statistiker.service';
import { DataEntityCard } from '../models/data-entity-card.model';
import { Component,  Input,   AfterViewInit,  ViewChild, ElementRef } from '@angular/core';
import { LineService } from '../providers/line.service';
import { DataEntityService } from '../providers/data-entity.service';


@Component({
  selector: 'app-data-entity-card',
  templateUrl: './data-entity-card.component.html',
  styleUrls: ['./data-entity-card.component.css']
})
export class DataEntityCardComponent implements AfterViewInit {

  @Input() dataEntityCard: DataEntityCard;
  @ViewChild('PastDiv') PastDiv: ElementRef;
  @ViewChild('PostDiv') PostDiv: ElementRef;

  PastDivLines: HTMLDivElement[] = [];
  PostDivLines: HTMLDivElement[] = [];

  ProduktName: string = "Milch";
  Value: number = 50;
  DurchschnittValue: number = 50;
  UeberschriftValue: string = "PreisPS";
  UeberschriftDurchschnittsValue: string = "Durchschnitt";
  PostValue: string = "0";
  // @Output() click = new EventEmitter<DataEntityCard>();

  constructor(private LineService: LineService, private dataEntityService: DataEntityService, private statistikerService: StatistikerService) {}

  ngAfterViewInit() {
    if (this.dataEntityCard) {
      this.ProduktName = this.dataEntityCard.Value.ProductName;
      this.Value = this.dataEntityCard.Value.PreisPS;
      this.DurchschnittValue = Number(this.statistikerService.calcMean( this.dataEntityService.createArray(this.dataEntityCard.PastValues, this.UeberschriftValue) ).toPrecision(2));
      this.updatePastDiv();
      this.updatePostDiv();
      // this.PostValue = this.dataEntityCard.PostValue.PreisPS;
    }
  }

  private updatePastDiv() {
    this.clearPastDivFromLines();
    this.createPastDivChart();
    this.InsertMittelwertLinieInPastDiv();
  }

  private updatePostDiv() {
    this.clearPostDivFromLines();
    this.createPostDivChart();
    this.InsertMittelwertLinieinPostDiv();
  }

  private updateNormalDiv(): any {
    throw new Error("Method not implemented.");
  }



  createPastDivChart(): any {
    const dataEntityArray = this.dataEntityCard.PastValues;
    const X = this.dataEntityService.createArray(dataEntityArray, "DataID").reverse();
    const Y = this.dataEntityService.createArray(dataEntityArray, "PreisPS");

    this.PastDivLines = this.createChart(X,Y, this.PastDiv);
    for (let index = 0; index < this.PastDivLines.length; index++) {
      const element = this.PastDivLines[index];
      (this.PastDiv.nativeElement as HTMLDivElement).appendChild(element);
    }
  }

  clearPastDivFromLines(): any {
    for (let index = 0; index < this.PastDivLines.length; index++) {
      const element = this.PastDivLines[index];
      (this.PastDiv.nativeElement as HTMLDivElement).removeChild(element);
    }
    this.PastDivLines = [];
  }

  InsertMittelwertLinieInPastDiv(): any {

    const div = (this.PastDiv.nativeElement as HTMLDivElement);
    const height = div.clientHeight;
    const width = div.clientWidth;
    const line = this.LineService.createLineByType(0, height/2, width, height/2, 'dotted');
    this.PastDivLines.push(line);
    (this.PastDiv.nativeElement as HTMLDivElement).appendChild(line);
  }

  clearPostDivFromLines(): any {
    for (let index = 0; index < this.PostDivLines.length; index++) {
      const element = this.PostDivLines[index];
      (this.PostDiv.nativeElement as HTMLDivElement).removeChild(element);
    }
    this.PostDivLines = [];
  }

  InsertMittelwertLinieinPostDiv(): any {
    const div = (this.PostDiv.nativeElement as HTMLDivElement);
    const height = div.clientHeight;
    const width = div.clientWidth;
    const line = this.LineService.createLineByType(0, height/2, width, height/2, 'dotted');
    this.PostDivLines.push(line);
    (this.PostDiv.nativeElement as HTMLDivElement).appendChild(line);
  }


  createPostDivChart(): any {
    const F: number[] = this.dataEntityService.createArray( this.dataEntityCard.PastValues , "PreisPS");
    const mu: number = this.statistikerService.calcMean(F);
    const sigma: number = this.statistikerService.calcStdDev(F);
    
    const randomWalks: number[] = this.statistikerService.randomWalk(F.length, mu, sigma);

    const Y: number[] = randomWalks;
    const X: number[] = this.LineService.createIterationList(randomWalks.length).reverse();

    this.PostDivLines =  this.createChart(X,Y, this.PostDiv);
    for (let index = 0; index < this.PostDivLines.length; index++){
      const element = this.PostDivLines[index];
      (this.PostDiv.nativeElement as HTMLDivElement).appendChild(element);
    }
  }

  createChart(X: number[], Y: number[], div: ElementRef): any {
    return this.LineService.createChart(div.nativeElement as HTMLDivElement, X, Y);
  }


  NormalDiv(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "100px";
    tmp[1].style.width = "100px";
    tmp[2].style.width = "100px";
    this.updatePastDiv();
    // this.updateNormalDiv();
    this.updatePostDiv();
  }

  PastDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "200px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "50px";
    this.updatePastDiv();
    // this.updateNormalDiv();
    this.updatePostDiv();
  }

  public FutureDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "50px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "200px";
    this.updatePastDiv();
    // this.updateNormalDiv();
    this.updatePostDiv();
  }

}




