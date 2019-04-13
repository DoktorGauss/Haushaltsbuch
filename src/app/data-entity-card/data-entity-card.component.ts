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

  @Input() dataEntityCard:DataEntityCard;
  @ViewChild('PastDiv') PastDiv: ElementRef; 
  Value = 50;
  ProduktName = "Milch";
  DurchschnittValue = 50;
  UeberschriftValue = "PPS";
  UeberschriftDurchschnittsValue = "Durchschnitt";
  // @Output() click = new EventEmitter<DataEntityCard>();
  
  constructor(private   LineService : LineService , private dataEntityService: DataEntityService) {
    
  }

  ngAfterViewInit() 
  {
    if(this.dataEntityCard){
      this.Value = this.dataEntityCard.Value.PreisPS;
      this.ProduktName = this.dataEntityCard.Value.ProductName;
      // debugger;
      const dataEntityArray = this.dataEntityCard.PastValues;
      const X = this.dataEntityService.createArray(dataEntityArray, "DataID");
      const Y = this.dataEntityService.createArray(dataEntityArray, "PreisPS");

      const PastDivLines: HTMLDivElement[] =  this.LineService.createChart( this.PastDiv.nativeElement as HTMLDivElement, X, Y);
      for (let index = 0; index < PastDivLines.length; index++) {
        const element = PastDivLines[index];
        // debugger;
        (this.PastDiv.nativeElement as HTMLDivElement).appendChild(element);
      }


      // (this.PastDiv.nativeElement as HTMLDivElement).appendChild(this.LineService.createLine(0, 0, 0, 100));
      // (this.PastDiv.nativeElement as HTMLDivElement).appendChild(this.LineService.createLine(0, 100, 100, 100));
      // (this.PastDiv.nativeElement as HTMLDivElement).appendChild(this.LineService.createLine(100, 100, 100, 0));
      // (this.PastDiv.nativeElement as HTMLDivElement).appendChild(this.LineService.createLine(100, 0, 0, 0));
    }
  }



  public FutureDivExpands(e){
    var tmp = e.currentTarget.parentElement.children;
    

    tmp[0].style.width = "50px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "200px";
  }

  NormalDiv(e){
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "100px";
    tmp[1].style.width = "100px";
    tmp[2].style.width = "100px";
  }

  PastDivExpands(e){
    var tmp = e.currentTarget.parentElement.children;
    tmp[0].style.width = "200px";
    tmp[1].style.width = "50px";
    tmp[2].style.width = "50px";
  }



}




