import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { ColorPicker } from '@syncfusion/ej2-inputs';

@Component({
  selector: 'app-data-handler',
  templateUrl: './data-handler.component.html',
  styleUrls: ['./data-handler.component.css']
})
export class DataHandlerComponent implements OnInit {
  public data: any[];
  public filterSettings: Object;
  public height;
  public pageSettings: PageSettingsModel;
  public textfield: string;
  // [allowPaging]='allowPaging' [allowSorting]='allowSorting' [allowFiltering]='allowFiltering'
  public allowPaging = true;
  public allowSorting = true;
  public allowFiltering = true;


  constructor() {
    this.height = "400px";
    this.textfield = "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
    // document.getElementById("pp").style.color = "white";
  }

  ngOnInit() {
    this.filterSettings = { type: 'CheckBox' };
    this.data = [
      { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
      { DataID: 101, PID: 1, ProductName: 'Milch1', Menge: 1, PreisPS: 0.62, Preis: 0.68 },
      { DataID: 102, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 103, PID: 1, ProductName: 'Milch1', Menge: 5, PreisPS: 0.67, Preis: 3.35 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 105, PID: 2, ProductName: 'Brot1', Menge: 1, PreisPS: 0.35, Preis: 0.35 },
      { DataID: 106, PID: 3, ProductName: 'Brot2', Menge: 2, PreisPS: 0.32, Preis: 0.64 },
      { DataID: 107, PID: 2, ProductName: 'Brot1', Menge: 3, PreisPS: 0.34, Preis: 1.02 },
      { DataID: 108, PID: 3, ProductName: 'Brot2', Menge: 4, PreisPS: 0.32, Preis: 1.28 },
      { DataID: 109, PID: 2, ProductName: 'Brot1', Menge: 5, PreisPS: 0.33, Preis: 1.65 },
      { DataID: 110, PID: 3, ProductName: 'Brot2', Menge: 3, PreisPS: 0.32, Preis: 0.96 },
    ];
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
