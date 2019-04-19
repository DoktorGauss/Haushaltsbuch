import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
   public DATA_ENTITY_LIST = [];

  constructor() {
    

    // <e-column field='DataID' headerText='ID' textAlign='Left' width='50'></e-column>
    // <e-column field='DatumString' headerText='Datum' textAlign='Left' width='50'></e-column>
    // <e-column field='PID' headerText='ProduktID' textAlign='Left' width='70'></e-column>
    // <e-column field='Type' headerText='ProduktTyp' textAlign='Left' width='70'></e-column>
    // <e-column field='HerkunftID' headerText='HerkunftID' textAlign='Left' width='70'></e-column>

    // <e-column field='ProductName' headerText='Produkt Name' textAlign='center' width='120'></e-column>
    // <e-column field='Menge' headerText='Menge' textAlign='center'  width='50'></e-column>
    // <e-column field='PreisPS' headerText='Preis Stück[€]' textAlign='right' format='n3' width='70'></e-column>
    // <!-- <e-column field='Preis' headerText='Preis insgesamt' format='c' width='140'></e-column> -->
    // <e-column field='Preis' headerText='Preis insgesamt[€]' format='n3' textAlign='right'  width='70'></e-column>
    

    this.DATA_ENTITY_LIST = [
      { DataID: 0,  DatumString: "2018-05-10" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, PreisEinkauf: 1.36 },
      { DataID: 1,  DatumString: "2018-05-17" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 2,  DatumString: "2018-05-18" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 5, PreisPS: 0.63, PreisEinkauf: 3.35 },
      { DataID: 3,  DatumString: "2018-06-14" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 4,  DatumString: "2018-07-18" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 5,  DatumString: "2018-08-07" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 6,  DatumString: "2018-09-21" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 7,  DatumString: "2018-09-26" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.76, PreisEinkauf: 2.04 },
      { DataID: 8,  DatumString: "2018-10-10" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 9,  DatumString: "2018-10-18" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.61, PreisEinkauf: 2.04 },
      { DataID: 10,  DatumString: "2018-11-27" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.62, PreisEinkauf: 2.04 },
      { DataID: 11,  DatumString: "2018-12-10" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 12,  DatumString: "2018-12-24" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 13,  DatumString: "2018-12-27" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 14,  DatumString: "2019-01-28" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.55, PreisEinkauf: 2.04 },
      { DataID: 15,  DatumString: "2019-02-15" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 16,  DatumString: "2019-03-04" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 17,  DatumString: "2019-04-03" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 18,  DatumString: "2019-04-12" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 19,  DatumString: "2019-04-23" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.81, PreisEinkauf: 2.04 },
      { DataID: 20,  DatumString: "2019-06-21" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.74, PreisEinkauf: 2.04 },
      { DataID: 21,  DatumString: "2019-07-19" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.72, PreisEinkauf: 2.04 },
      { DataID: 22,  DatumString: "2019-10-14" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 23,  DatumString: "2019-11-29" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 24,  DatumString: "2019-12-17" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.62, PreisEinkauf: 2.04 },
      { DataID: 25,  DatumString: "2019-12-25" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 26,  DatumString: "2019-12-27" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 27,  DatumString: "2020-01-06" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.67, PreisEinkauf: 2.04 },
      { DataID: 28,  DatumString: "2020-01-17" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 29,  DatumString: "2020-02-11" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 30,  DatumString: "2020-03-20" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 31,  DatumString: "2020-05-06" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 1, PreisPS: 0.33, PreisEinkauf: 0.35 },
      { DataID: 32,  DatumString: "2020-05-07" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 2, PreisPS: 0.34, PreisEinkauf: 0.64 },
      { DataID: 33,  DatumString: "2020-05-29" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 3, PreisPS: 0.32, PreisEinkauf: 1.02 },
      { DataID: 34,  DatumString: "2020-06-04" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 4, PreisPS: 0.38, PreisEinkauf: 1.28 },
      { DataID: 35,  DatumString: "2020-06-08" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 5, PreisPS: 0.34, PreisEinkauf: 1.65 },
      { DataID: 36,  DatumString: "2020-06-18" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 3, PreisPS: 0.38, PreisEinkauf: 0.96 },
      { DataID: 37,  DatumString: "2020-06-19" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 1, PreisPS: 0.31, PreisEinkauf: 0.35 },
      { DataID: 38,  DatumString: "2020-07-13" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 2, PreisPS: 0.30, PreisEinkauf: 0.64 },
      { DataID: 39,  DatumString: "2020-07-22" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 3, PreisPS: 0.29, PreisEinkauf: 1.02 },
      { DataID: 40,  DatumString: "2020-08-27" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 4, PreisPS: 0.28, PreisEinkauf: 1.28 },
      { DataID: 41,  DatumString: "2020-08-28" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 5, PreisPS: 0.34, PreisEinkauf: 1.65 },
      { DataID: 42,  DatumString: "2020-08-31" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 3, PreisPS: 0.39, PreisEinkauf: 0.96 },
      { DataID: 43,  DatumString: "2020-09-04" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 1, PreisPS: 0.38, PreisEinkauf: 0.35 },
      { DataID: 44,  DatumString: "2020-09-21" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 2, PreisPS: 0.37, PreisEinkauf: 0.64 },
      { DataID: 45,  DatumString: "2020-09-28" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 3, PreisPS: 0.36, PreisEinkauf: 1.02 },
      { DataID: 46,  DatumString: "2020-10-15" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 4, PreisPS: 0.40, PreisEinkauf: 1.28 },
      { DataID: 47,  DatumString: "2020-11-11" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 5, PreisPS: 0.41, PreisEinkauf: 1.65 },
      { DataID: 48,  DatumString: "2020-12-17" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 3, PreisPS: 0.32, PreisEinkauf: 0.96 },
      { DataID: 49,  DatumString: "2020-12-28" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 1, PreisPS: 0.40, PreisEinkauf: 0.35 },
      { DataID: 50,  DatumString: "2021-01-12" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 2, PreisPS: 0.37, PreisEinkauf: 0.64 },
      { DataID: 51,  DatumString: "2021-02-03" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 3, PreisPS: 0.34, PreisEinkauf: 1.02 },
      { DataID: 52,  DatumString: "2021-02-22" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 4, PreisPS: 0.32, PreisEinkauf: 1.28 },
      { DataID: 53,  DatumString: "2021-03-10" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 5, PreisPS: 0.31, PreisEinkauf: 1.65 },
      { DataID: 54,  DatumString: "2021-04-19" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 3, PreisPS: 0.38, PreisEinkauf: 0.96 },
      { DataID: 55,  DatumString: "2021-04-27" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 1, PreisPS: 0.35, PreisEinkauf: 0.35 },
      { DataID: 56,  DatumString: "2021-04-29" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 2, PreisPS: 0.35, PreisEinkauf: 0.64 },
      { DataID: 57,  DatumString: "2021-05-03" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 3, PreisPS: 0.34, PreisEinkauf: 1.02 },
      { DataID: 58,  DatumString: "2021-05-05" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 4, PreisPS: 0.40, PreisEinkauf: 1.28 },
      { DataID: 59,  DatumString: "2021-05-06" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 5, PreisPS: 0.33, PreisEinkauf: 1.65 },
      { DataID: 60,  DatumString: "2021-05-17" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 3, PreisPS: 0.32, PreisEinkauf: 0.96 },
      { DataID: 61,  DatumString: "2021-05-20" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 1, PreisPS: 0.35, PreisEinkauf: 0.35 },
      { DataID: 62,  DatumString: "2021-06-04" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 2, PreisPS: 0.39, PreisEinkauf: 0.64 },
      { DataID: 63,  DatumString: "2021-06-11" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 3, PreisPS: 0.33, PreisEinkauf: 1.02 },
      { DataID: 64,  DatumString: "2021-06-22" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 4, PreisPS: 0.44, PreisEinkauf: 1.28 },
      { DataID: 65,  DatumString: "2021-07-02" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 5, PreisPS: 0.28, PreisEinkauf: 1.65 },
      { DataID: 66,  DatumString: "2021-08-03" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 3, PreisPS: 0.49, PreisEinkauf: 0.96 },
    ];
  }

  public getDataEntityList(): any[]{
    return this.DATA_ENTITY_LIST;
  }


  public getHerkunftsString(h: number): string {
    switch (h) {
      case 0: 
        return this.YOURNAME;
        break;
      case 1:9
      break;
      default:
        break;
    }

  }

  public YOURNAME: string = "ME";
  
}
