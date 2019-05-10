import { DataEntityCard } from './../../models/data-entity-card.model';
import { DataEntityCardService } from './../../providers/data-entity-card.service';
import { Component, Input} from '@angular/core';

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
    this.ForeignKeyList.forEach(element => {
      this.dataEntityCardList.push( this.dataEntityCardService.createDataEntityCardList(element));
    });
  }
}