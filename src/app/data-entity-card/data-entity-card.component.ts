import { StatistikerService } from './../providers/statistiker.service';
import { DataEntity } from './../data-entity/data-entity.model';
import { DataEntityCard } from './data-entity-card.model';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { LineService } from '../providers/line.service';
import { DataEntityService } from '../providers/data-entity.service';
import { PortalHostDirective } from '@angular/cdk/portal';
import { Data } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-data-entity-card',
  templateUrl: './data-entity-card.component.html',
  styleUrls: ['./data-entity-card.component.css']
})
export class DataEntityCardComponent implements AfterViewInit {

  @Input() dataEntityCard: DataEntityCard;
  @ViewChild('PastDiv') PastDiv: ElementRef;
  PastDivLines: HTMLDivElement[] = [];
  ProduktName: string = "Milch";
  Value: number = 50;
  DurchschnittValue: number = 50;
  UeberschriftValue: string = "PreisPS";
  UeberschriftDurchschnittsValue: string = "Durchschnitt";


  PostValue: number = 50;
  // @Output() click = new EventEmitter<DataEntityCard>();

  constructor(private LineService: LineService, private dataEntityService: DataEntityService, private statistikerService: StatistikerService) {

  }

  ngAfterViewInit() {
    if (this.dataEntityCard) {
      this.ProduktName = this.dataEntityCard.Value.ProductName;
      this.Value = this.dataEntityCard.Value.PreisPS;
      this.DurchschnittValue = Number(this.statistikerService.calcMean( this.dataEntityService.createArray(this.dataEntityCard.PastValues, this.UeberschriftValue) ).toPrecision(2));
      this.updatePastDiv();
      this.updatePostDiv();
      this.PostValue = this.dataEntityCard.PostValue.PreisPS;
    }
  }

  private updatePastDiv() {
    this.clearPastDivFromLines();
    this.createChart();
    this.InsertMittelwertLinie();
  }

  clearPastDivFromLines(): any {
    for (let index = 0; index < this.PastDivLines.length; index++) {
      const element = this.PastDivLines[index];
      (this.PastDiv.nativeElement as HTMLDivElement).removeChild(element);
    }
    this.PastDivLines = [];
  }

  InsertMittelwertLinie(): any {

    const div = (this.PastDiv.nativeElement as HTMLDivElement);
    const height = div.clientHeight;
    const width = div.clientWidth;
    const line = this.LineService.createLineByType(0, height/2, width, height/2, 'dotted');
    this.PastDivLines.push(line);
    (this.PastDiv.nativeElement as HTMLDivElement).appendChild(line);
  }

  createChart(): any {
    const dataEntityArray = this.dataEntityCard.PastValues;
    const X = this.dataEntityService.createArray(dataEntityArray, "DataID").reverse();
    const Y = this.dataEntityService.createArray(dataEntityArray, "PreisPS");
    const PastDivLines: HTMLDivElement[] = this.LineService.createChart(this.PastDiv.nativeElement as HTMLDivElement, X, Y);
    this.PastDivLines = PastDivLines;
    for (let index = 0; index < PastDivLines.length; index++) {
      const element = PastDivLines[index];
      (this.PastDiv.nativeElement as HTMLDivElement).appendChild(element);
    }
  }





  public FutureDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "50px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "200px";
    this.updatePastDiv();
    this.updateNormalDiv();
    this.updatePostDiv();
  }


  private updatePostDiv(): any {
    const F: number[] = this.dataEntityService.createArray( this.dataEntityCard.PastValues , "DeltaPreis");
    const X = this.dataEntityService.createArray( this.dataEntityCard.PastValues , "DataID");
    debugger;
    const GaussProzess = this.statistikerService.GaussProzess(X,F, null,null);
    // const predictValue = regression.predict( this.statistikerService.getMax(X) + 1);
    // var dataEntity = new DataEntity();
    // dataEntity.DataID = this.dataEntityCard.Value.DataID ++;
    // dataEntity.Datum = new Date();
    // dataEntity.DatumString =  new Date().toString();
    // dataEntity.HerkunftID =  this.dataEntityCard.Value.HerkunftID;
    // dataEntity.Menge =  1;
    // dataEntity.PID =  this.dataEntityCard.Value.PID;
    // dataEntity.PreisEinkauf = predictValue[1];
    // dataEntity.PreisPS =  predictValue[1];
    // dataEntity.ProductName =  this.dataEntityCard.Value.ProductName;
    // dataEntity.Type =  this.dataEntityCard.Value.Type;

    // this.dataEntityCard.PostValue = dataEntity;


  }
  private updateNormalDiv(): any {
    throw new Error("Method not implemented.");
  }



  NormalDiv(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "100px";
    tmp[1].style.width = "100px";
    tmp[2].style.width = "100px";
    this.updatePastDiv();
    this.updateNormalDiv();
    this.updatePostDiv();
  }

  PastDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "200px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "50px";
    this.updatePastDiv();
    this.updateNormalDiv();
    this.updatePostDiv();
  }



}




