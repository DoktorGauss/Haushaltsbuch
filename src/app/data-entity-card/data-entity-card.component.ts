import { DataEntity } from './../data-entity/data-entity.model';
import { DataEntityCard } from './data-entity-card.model';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { LineService } from '../providers/line.service';
import { DataEntityService } from '../providers/data-entity.service';
import { PortalHostDirective } from '@angular/cdk/portal';

@Component({
  selector: 'app-data-entity-card',
  templateUrl: './data-entity-card.component.html',
  styleUrls: ['./data-entity-card.component.css']
})
export class DataEntityCardComponent implements AfterViewInit {

  @Input() dataEntityCard: DataEntityCard;
  @ViewChild('PastDiv') PastDiv: ElementRef;
  MyPastDivLines: HTMLDivElement[] = [];
  Value = 50;
  ProduktName = "Milch";
  DurchschnittValue = 50;
  UeberschriftValue = "PPS";
  UeberschriftDurchschnittsValue = "Durchschnitt";
  // @Output() click = new EventEmitter<DataEntityCard>();

  constructor(private LineService: LineService, private dataEntityService: DataEntityService) {

  }

  ngAfterViewInit() {
    if (this.dataEntityCard) {
      this.Value = this.dataEntityCard.Value.PreisPS;
      this.ProduktName = this.dataEntityCard.Value.ProductName;
      this.updatePastDiv();
    }
  }

  private updatePastDiv() {
    this.clearPastDivFromLines();
    this.createChart();
    this.InsertMittelwertLinie();
  }

  clearPastDivFromLines(): any {
    for (let index = 0; index < this.MyPastDivLines.length; index++) {
      const element = this.MyPastDivLines[index];
      (this.PastDiv.nativeElement as HTMLDivElement).removeChild(element);
    }
    this.MyPastDivLines = [];
  }

  InsertMittelwertLinie(): any {

    const div = (this.PastDiv.nativeElement as HTMLDivElement);
    const height = div.clientHeight;
    const width = div.clientWidth;
    const line = this.LineService.createLineByType(0, height/2, width, height/2, 'dotted');
    this.MyPastDivLines.push(line);
    (this.PastDiv.nativeElement as HTMLDivElement).appendChild(line);
  }

  createChart(): any {
    const dataEntityArray = this.dataEntityCard.PastValues;
    const X = this.dataEntityService.createArray(dataEntityArray, "DataID");
    const Y = this.dataEntityService.createArray(dataEntityArray, "PreisPS");

    const PastDivLines: HTMLDivElement[] = this.LineService.createChart(this.PastDiv.nativeElement as HTMLDivElement, X, Y);
    this.MyPastDivLines = PastDivLines;
    for (let index = 0; index < PastDivLines.length; index++) {
      const element = PastDivLines[index];
      // debugger;
      (this.PastDiv.nativeElement as HTMLDivElement).appendChild(element);
    }
  }





  public FutureDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "50px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "200px";
    this.updatePastDiv();
  }

  NormalDiv(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "100px";
    tmp[1].style.width = "100px";
    tmp[2].style.width = "100px";
    this.updatePastDiv();
  }

  PastDivExpands(e) {
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "200px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "50px";
    debugger;
    this.updatePastDiv();
  }



}




