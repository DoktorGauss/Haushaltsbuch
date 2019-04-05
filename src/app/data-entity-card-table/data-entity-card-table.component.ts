import { Component, OnInit } from '@angular/core';
import { DataEntityCardComponent } from '../data-entity-card/data-entity-card.component';

@Component({
  selector: 'app-data-entity-card-table',
  templateUrl: './data-entity-card-table.component.html',
  styleUrls: ['./data-entity-card-table.component.css']
})
export class DataEntityCardTableComponent implements OnInit {
  public dataEntityCardComponentList: DataEntityCardComponent[];
  constructor() { }

  ngOnInit() {
    
  }

}
