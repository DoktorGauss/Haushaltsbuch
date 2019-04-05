import { DataEntity } from './../data-entity/data-entity.model';
import { Injectable } from '@angular/core';
import { DataEntityService } from './data-entity.service';
import { DataEntityCard } from '../data-entity-card/data-entity-card.model';

@Injectable({
  providedIn: 'root'
})
export class DataEntityCardService {

  public array_name:DataEntity[];  
  public dataEntityCardList:DataEntityCard[];
  dataEntityList: any;

  constructor(private dataEntityService: DataEntityService) { 
    this.dataEntityList = this.dataEntityService.createDataEntityList();
    this.dataEntityCardList = this.createDataEntityCardList();
  }



  private createDataEntityCardList(): DataEntityCard[] {
    var tmpList:DataEntity[] = this.dataEntityList; // Speichere Liste in kopie
    var tmpCardList:DataEntityCard[]; // return Liste
    while (tmpList.length > 0) { // Solange die KopieListe existiert
      var tmpElement:DataEntity = tmpList[0]; // nehme das erste Element aus KopieListe
      var tmpEntityList:DataEntity[]; // erstelle eine zweite noch leere Liste. 
      for (let index = 0; index < tmpList.length; index++) {  // geh durch jedes Item in der ersten Liste (KopieListe)
        const element: DataEntity = tmpList[index]; // nehme das aktuelle element
        if(element.produktId == tmpElement.produktId){ // gleiche PRODUKT ID wie erstes Element?
          tmpEntityList.push(element); // speichere in zweiter Liste
          tmpList.splice(index, 1); // lösche das item aus der ersten Liste (KopieListe)
          index--; // Zähler zurücksetzen ==> weil kürzer geworden ^^ 
        }
      }
      //Wir haben noch einen (den zweiten) Array befüllt, in dem jedes Element die gleiche ProduktID hat.
      tmpEntityList.sort( (e1,e2) => e1.dataId - e2.dataId); // sortiere zweiten array nach der ID (setzt Chronologie fest)
      tmpCardList.push(new DataEntityCard( tmpEntityList[tmpEntityList.length-1] , tmpEntityList , new DataEntity(0,0,0,0,0,0) )); // erstelle Card aus der Liste und Pushe die Card dem returner hinzu
    } // Liste wird immer leerer durch das löschen. Mache das solange die Liste befüllt ist.

    return tmpCardList; // return die CardListe
  }

  private createDataEntityList(): DataEntity[] {
    // { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
    var tmp = this.dataEntityService.dataEntityList; // Speichere Json 

    
    return null;
  }
}
