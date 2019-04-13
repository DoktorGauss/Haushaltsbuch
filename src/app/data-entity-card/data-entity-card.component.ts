import { DataEntity } from './../data-entity/data-entity.model';
import { DataEntityCard } from './data-entity-card.model';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { LineService } from '../providers/line.service';

@Component({
  selector: 'app-data-entity-card',
  templateUrl: './data-entity-card.component.html',
  styleUrls: ['./data-entity-card.component.css']
})
export class DataEntityCardComponent implements AfterViewInit {

  @Input() dataEntityCard:DataEntityCard;
  Value = 50;
  ProduktName = "Milch";
  DurchschnittValue = 50;
  UeberschriftValue = "Letzter Wert";
  UeberschriftDurchschnittsValue = "Durchschnitt";
  // @Output() click = new EventEmitter<DataEntityCard>();
  
  constructor(private   LineService : LineService) {
    
  }

  ngAfterViewInit() 
  {
    this.Value = this.dataEntityCard.Value.PreisPS;
    this.ProduktName = this.dataEntityCard.Value.ProductName;
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




