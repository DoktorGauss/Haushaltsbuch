import { GlobalsService } from './globals.service';
import { Injectable } from '@angular/core';
import { DataEntity } from '../data-entity/data-entity.model';
import { Serialization } from '../serialization.helper';

@Injectable({
  providedIn: 'root'
})
export class DataEntityService {


  public dataEntityList: DataEntity[];
  public dataEntityListJSON: any[];

  constructor(private globalsService: GlobalsService) {
    this.dataEntityList = this.createDataEntityList();
  }

  public getDataEntityList(): DataEntity[] {
    return this.dataEntityList;
  }

  private createDataEntityList(): DataEntity[] {
    // { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
    var tmpDataEntityListJson = this.globalsService.getDataEntityList(); // Speichere Json 
    this.dataEntityListJSON = tmpDataEntityListJson;
    let dataEntityListClass = []; // create returner 
    for (let index = 0; index < tmpDataEntityListJson.length; index++) {  // gehe durch jedes Json
      const element = tmpDataEntityListJson[index]; // aktuelle Json
      var tmp: DataEntity = new DataEntity();
      tmp.DataID = element['DataID'];
      tmp.Menge = element['Menge'];
      tmp.PID = element['PID'];
      tmp.PreisEinkauf = element['PreisEinkauf'];
      tmp.PreisPS = element['PreisPS'];
      tmp.ProductName = element['ProductName'];
      tmp.Datum = new Date(element['DatumString']);
      tmp.DatumString = element['DatumString'];
      tmp.HerkunftID = element['HerkunftID'];
      tmp.Type = element["Type"];
      dataEntityListClass.push(tmp); // JSON ==> Class    
    }
    return dataEntityListClass; // return
  }

  public createArray(dataEntities: DataEntity[], attribute: string): any[] {
    var returner: any[] = [];
    for (let index = 0; index < dataEntities.length; index++) {
      const element = dataEntities[index];
      switch (attribute) {
        case "DataID":
          returner.push(element.DataID);
          break;
        case "PID":
          returner.push(element.PID);
          break;
        case "ProductName":
          returner.push(element.ProductName);
          break;
        case "Datum":
          returner.push(element.Datum);
          break;
        case "PreisPS":
          returner.push(element.PreisPS);
          break;
        default:
          break;
      }
    }
    return returner;
  }
}
