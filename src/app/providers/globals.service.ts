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
      { DataID: 100,  DatumString: "2018-05-10" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, PreisEinkauf: 1.36 },
      { DataID: 101,  DatumString: "2018-05-17" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 102,  DatumString: "2018-05-18" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 5, PreisPS: 0.63, PreisEinkauf: 3.35 },
      { DataID: 103,  DatumString: "2018-06-14" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 104,  DatumString: "2018-07-18" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 105,  DatumString: "2018-08-07" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 106,  DatumString: "2018-09-21" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 107,  DatumString: "2018-09-26" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.76, PreisEinkauf: 2.04 },
      { DataID: 108,  DatumString: "2018-10-10" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 109,  DatumString: "2018-10-18" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.61, PreisEinkauf: 2.04 },
      { DataID: 110,  DatumString: "2018-11-27" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.62, PreisEinkauf: 2.04 },
      { DataID: 111,  DatumString: "2018-12-10" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 112,  DatumString: "2018-12-24" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 113,  DatumString: "2018-12-27" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 114,  DatumString: "2019-01-28" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.55, PreisEinkauf: 2.04 },
      { DataID: 115,  DatumString: "2019-02-15" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 116,  DatumString: "2019-03-04" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 117,  DatumString: "2019-04-03" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 118,  DatumString: "2019-04-12" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 119,  DatumString: "2019-04-23" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.81, PreisEinkauf: 2.04 },
      { DataID: 120,  DatumString: "2019-06-21" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.74, PreisEinkauf: 2.04 },
      { DataID: 121,  DatumString: "2019-07-19" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.72, PreisEinkauf: 2.04 },
      { DataID: 122,  DatumString: "2019-10-14" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 123,  DatumString: "2019-11-29" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 5, PreisPS: 0.65, PreisEinkauf: 3.35 },
      { DataID: 124,  DatumString: "2019-12-17" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.62, PreisEinkauf: 2.04 },
      { DataID: 125,  DatumString: "2019-12-25" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.64, PreisEinkauf: 2.04 },
      { DataID: 126,  DatumString: "2019-12-27" ,PID: 1, Type: "Kosten",  HerkunftID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 127,  DatumString: "2020-01-06" ,PID: 1, Type: "Kosten",  HerkunftID: 2, ProductName: 'Milch1', Menge: 3, PreisPS: 0.67, PreisEinkauf: 2.04 },
      { DataID: 128,  DatumString: "2020-01-17" ,PID: 1, Type: "Kosten",  HerkunftID: 3, ProductName: 'Milch1', Menge: 3, PreisPS: 0.65, PreisEinkauf: 2.04 },
      { DataID: 129,  DatumString: "2020-02-11" ,PID: 1, Type: "Kosten",  HerkunftID: 4, ProductName: 'Milch1', Menge: 3, PreisPS: 0.69, PreisEinkauf: 2.04 },
      { DataID: 130,  DatumString: "2020-03-20" ,PID: 1, Type: "Kosten",  HerkunftID: 5, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, PreisEinkauf: 2.04 },
      { DataID: 131,  DatumString: "2020-05-06" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 1, PreisPS: 0.33, PreisEinkauf: 0.35 },
      { DataID: 132,  DatumString: "2020-05-07" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 2, PreisPS: 0.34, PreisEinkauf: 0.64 },
      { DataID: 133,  DatumString: "2020-05-29" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 3, PreisPS: 0.32, PreisEinkauf: 1.02 },
      { DataID: 134,  DatumString: "2020-06-04" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 4, PreisPS: 0.38, PreisEinkauf: 1.28 },
      { DataID: 135,  DatumString: "2020-06-08" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 5, PreisPS: 0.34, PreisEinkauf: 1.65 },
      { DataID: 136,  DatumString: "2020-06-18" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 3, PreisPS: 0.38, PreisEinkauf: 0.96 },
      { DataID: 137,  DatumString: "2020-06-19" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 1, PreisPS: 0.31, PreisEinkauf: 0.35 },
      { DataID: 138,  DatumString: "2020-07-13" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 2, PreisPS: 0.30, PreisEinkauf: 0.64 },
      { DataID: 139,  DatumString: "2020-07-22" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 3, PreisPS: 0.29, PreisEinkauf: 1.02 },
      { DataID: 140,  DatumString: "2020-08-27" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 4, PreisPS: 0.28, PreisEinkauf: 1.28 },
      { DataID: 141,  DatumString: "2020-08-28" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 5, PreisPS: 0.34, PreisEinkauf: 1.65 },
      { DataID: 142,  DatumString: "2020-08-31" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 3, PreisPS: 0.39, PreisEinkauf: 0.96 },
      { DataID: 143,  DatumString: "2020-09-04" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 1, PreisPS: 0.38, PreisEinkauf: 0.35 },
      { DataID: 144,  DatumString: "2020-09-21" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 2, PreisPS: 0.37, PreisEinkauf: 0.64 },
      { DataID: 145,  DatumString: "2020-09-28" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 3, PreisPS: 0.36, PreisEinkauf: 1.02 },
      { DataID: 146,  DatumString: "2020-10-15" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 4, PreisPS: 0.40, PreisEinkauf: 1.28 },
      { DataID: 147,  DatumString: "2020-11-11" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 5, PreisPS: 0.41, PreisEinkauf: 1.65 },
      { DataID: 148,  DatumString: "2020-12-17" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 3, PreisPS: 0.32, PreisEinkauf: 0.96 },
      { DataID: 149,  DatumString: "2020-12-28" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 1, PreisPS: 0.40, PreisEinkauf: 0.35 },
      { DataID: 150,  DatumString: "2021-01-12" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 2, PreisPS: 0.37, PreisEinkauf: 0.64 },
      { DataID: 151,  DatumString: "2021-02-03" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 3, PreisPS: 0.34, PreisEinkauf: 1.02 },
      { DataID: 152,  DatumString: "2021-02-22" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 4, PreisPS: 0.32, PreisEinkauf: 1.28 },
      { DataID: 153,  DatumString: "2021-03-10" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 5, PreisPS: 0.31, PreisEinkauf: 1.65 },
      { DataID: 154,  DatumString: "2021-04-19" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 3, PreisPS: 0.38, PreisEinkauf: 0.96 },
      { DataID: 155,  DatumString: "2021-04-27" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 1, PreisPS: 0.35, PreisEinkauf: 0.35 },
      { DataID: 156,  DatumString: "2021-04-29" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 2, PreisPS: 0.35, PreisEinkauf: 0.64 },
      { DataID: 157,  DatumString: "2021-05-03" ,PID: 2, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot11', Menge: 3, PreisPS: 0.34, PreisEinkauf: 1.02 },
      { DataID: 158,  DatumString: "2021-05-05" ,PID: 3, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot12', Menge: 4, PreisPS: 0.40, PreisEinkauf: 1.28 },
      { DataID: 159,  DatumString: "2021-05-06" ,PID: 2, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot11', Menge: 5, PreisPS: 0.33, PreisEinkauf: 1.65 },
      { DataID: 160,  DatumString: "2021-05-17" ,PID: 3, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot12', Menge: 3, PreisPS: 0.32, PreisEinkauf: 0.96 },
      { DataID: 161,  DatumString: "2021-05-20" ,PID: 2, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot11', Menge: 1, PreisPS: 0.35, PreisEinkauf: 0.35 },
      { DataID: 162,  DatumString: "2021-06-04" ,PID: 3, Type: "Kosten",  HerkunftID: 2, ProductName: 'Brot12', Menge: 2, PreisPS: 0.39, PreisEinkauf: 0.64 },
      { DataID: 163,  DatumString: "2021-06-11" ,PID: 2, Type: "Kosten",  HerkunftID: 3, ProductName: 'Brot11', Menge: 3, PreisPS: 0.33, PreisEinkauf: 1.02 },
      { DataID: 164,  DatumString: "2021-06-22" ,PID: 3, Type: "Kosten",  HerkunftID: 4, ProductName: 'Brot12', Menge: 4, PreisPS: 0.44, PreisEinkauf: 1.28 },
      { DataID: 165,  DatumString: "2021-07-02" ,PID: 2, Type: "Kosten",  HerkunftID: 5, ProductName: 'Brot11', Menge: 5, PreisPS: 0.28, PreisEinkauf: 1.65 },
      { DataID: 166,  DatumString: "2021-08-03" ,PID: 3, Type: "Kosten",  HerkunftID: 1, ProductName: 'Brot12', Menge: 3, PreisPS: 0.49, PreisEinkauf: 0.96 },
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
