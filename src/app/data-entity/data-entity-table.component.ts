import { DataEntityService } from './../providers/data-entity.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-entity-table',
  templateUrl: './data-entity-table.component.html',
  styleUrls: ['./data-entity-table.component.css']
})
export class DataEntityTableComponent implements OnInit {

  public data: any[];
  public filterSettings: Object;
  public height;
  public textfield: string;
  // [allowPaging]='allowPaging' [allowSorting]='allowSorting' [allowFiltering]='allowFiltering'
  public allowPaging = true;
  public allowSorting = true;
  public allowFiltering = true;


  constructor(
    private dataEntityService : DataEntityService
  ) {
    this.height = "400px";
    this.textfield = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
    // document.getElementById("pp").style.color = "white";
  }

  ngOnInit() {
    this.filterSettings = { type: 'CheckBox' };
    this.data = this.dataEntityService.getDataEntityList();
  }

  onKeydown(event) {
    if (event.key === "Enter") {
    }
  }


  minimizeTable() {
    this.height = "10px";
    this.allowFiltering=false;
    this.allowPaging=false;
    this.allowSorting=false;
  }
  maximizeTable() {
    this.height = "400px";
    this.allowFiltering=true;
    this.allowPaging=true;
    this.allowSorting=true;
  }


}
