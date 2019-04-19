import { LineService } from './../providers/line.service';
import { Component, OnInit, ViewChild, Injector, Input, TemplateRef, ContentChild, AfterViewInit } from '@angular/core';
import { DataEntityCardComponent } from '../data-entity-card/data-entity-card.component';
import { DataEntityCardService } from '../providers/data-entity-card.service';
import { DataEntityCard } from '../models/data-entity-card.model';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-data-entity-card-table',
  templateUrl: './data-entity-card-table.component.html',
  styleUrls: ['./data-entity-card-table.component.css']
})
export class DataEntityCardTableComponent {
  // public dataEntityCardComponentList: DataEntityCardComponent[];
  @Input() dataEntityCardList: DataEntityCard[][];

  public ForeignKeyList: string[] = ["ProductID", "Type", "HerkunftID"];


  constructor(private dataEntityCardService: DataEntityCardService) {
    this.dataEntityCardList = [];
    this.dataEntityCardList.push( this.dataEntityCardService.createDataEntityCardList("ProductID"));
    this.dataEntityCardList.push( this.dataEntityCardService.createDataEntityCardList("Type"));
    this.dataEntityCardList.push( this.dataEntityCardService.createDataEntityCardList("HerkunftID"));
  }
}