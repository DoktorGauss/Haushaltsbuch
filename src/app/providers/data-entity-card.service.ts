import { DataEntityCardComponent } from './../data-entity-card/data-entity-card.component';
import { Injectable } from '@angular/core';
import { DataEntityService } from './data-entity.service';
import { DataEntityCard } from '../models/data-entity-card.model';
import { DataEntity } from '../models/data-entity.model';

@Injectable({
  providedIn: 'root'
})
export class DataEntityCardService {

  public dataEntityCardList:DataEntityCard[]; // die CardListe
  public dataEntityList:DataEntity[]; // die EntityListe
  // es gilt :  EntityListe >= CardListe

  constructor(private dataEntityService: DataEntityService) { 
    this.dataEntityList = this.dataEntityService.getDataEntityList();
  }



  public createDataEntityCardList(foreignKey: string): DataEntityCard[] {
    var tmpList:DataEntity[] = this.dataEntityService.getDataEntityList(); // Speichere Liste in kopie
    var tmpCardList = []; // return Liste
    while (tmpList.length > 0) { // Solange die KopieListe existiert
      var tmpElement:DataEntity = tmpList[0]; // nehme das erste Element aus KopieListe
      var tmpEntityList = []; // erstelle eine zweite noch leere Liste. 
      for (let index = 0; index < tmpList.length; index++) {  // geh durch jedes Item in der ersten Liste (KopieListe)
        const element: DataEntity = tmpList[index]; // nehme das aktuelle element
        if(element.getValueOFForeignKey(foreignKey) == tmpElement.getValueOFForeignKey(foreignKey)){ // gleicher foreign Key wie element  
          tmpEntityList.push(element); // speichere in zweiter Liste
          tmpList.splice(index, 1); // lösche das item aus der ersten Liste (KopieListe)
          index--; // Zähler zurücksetzen ==> weil kürzer geworden ^^ 
        }
      }
      //Wir haben noch einen (den zweiten) Array befüllt, in dem jedes Element den gleichen Foreign Key hat.
      tmpEntityList.sort( (e1,e2) => e1.dataId - e2.dataId); // sortiere zweiten array nach der ID (setzt Chronologie fest) Primary Key
      var tmp = new DataEntityCard(DataEntityCardComponent); // erstelle neue Card
      tmp.Value = tmpEntityList[tmpEntityList.length-1]; // aktuelle Value ist der letzte in der Liste
      tmp.PastValues = tmpEntityList; // Die vergangenen Values sind alle in der Liste
      tmp.PostValue = new DataEntity(); // der geschätze Value kommt noch   
      tmpCardList.push(tmp); // erstelle Card aus der Liste und Pushe die Card dem returner hinzu
    } // Liste wird immer leerer durch das löschen. Mache das solange die Liste befüllt ist.

    return tmpCardList; // return die CardListe
  }


}
