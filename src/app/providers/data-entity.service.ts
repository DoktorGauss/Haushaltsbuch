import { GlobalsService } from './globals.service';
import { Injectable } from '@angular/core';
import { DataEntity } from '../models/data-entity.model';

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
    return this.dataEntityList.length === 0 ? this.createDataEntityList() : this.dataEntityList;
  }

  private createDataEntityList(): DataEntity[] {
    // { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
    var tmpDataEntityListJson = this.globalsService.getDataEntityList(); // Speichere Json 
    this.dataEntityListJSON = tmpDataEntityListJson;
    let dataEntityListClass: DataEntity[] = []; // create returner 
    for (let index = 0; index < tmpDataEntityListJson.length; index++) {  // gehe durch jedes Json
      const element = tmpDataEntityListJson[index]; // aktuelle Json
      var tmp: DataEntity = new DataEntity();
      tmp.ID.value = element['DataID'];
      tmp.Werte.Menge = element['Menge'];
      tmp.PID.value = element['PID'];
      tmp.Werte.PreisEinkauf = element['PreisEinkauf'];
      tmp.Werte.PreisPS = element['PreisPS'];
      tmp.NAME.value = element['ProductName'];
      tmp.Datum.value = new Date(element['DatumString']);
      tmp.HerkunftID.value = element['HerkunftID'];
      tmp.Type.value = element["Type"];
      if(index>= 1){
        tmp.Werte.DeltaPreis = tmp.Werte.PreisPS - dataEntityListClass[index-1].Werte.PreisPS;
      } else {
        tmp.Werte.DeltaPreis = 0;
      }
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
          returner.push(element.ID.value);
          break;
        case "PID":
          returner.push(element.PID.value);
          break;
        case "ProductName":
          returner.push(element.NAME.value)
          break;
        case "Datum":
          returner.push(element.Datum.value);
          break;
        case "PreisPS":
          returner.push(element.Werte.PreisPS);
          break;
          case "DeltaPreis":
          returner.push(element.Werte.DeltaPreis);
          break;
        default:
          break;
      }
    }
    return returner;
  }
}
