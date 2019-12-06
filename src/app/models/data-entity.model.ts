import { BaseEntity } from '../shared/models/base-entity';
import { SecondaryKey } from '../shared/models/secundary-key';
import { PrimaryKey_ID } from '../shared/models/primary-key';



//   { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
enum DataType {
    Kosten = "Kosten",
    Lohn = "Lohn",
    RegelmeasigeKosten = "RegelmeasigeKosten",
    RegelmeasigerLohn = "RegelmeasigerLohn",
    GescheatzteKosten = "GescheatzteKosten",
    GescheatzerLohn = "GescheatzerLohn"
}

export interface AbhängigeVariable {
    Menge: number;
    PreisPS: number;
    PreisEinkauf: number;
    DeltaPreis: number;
}


export class DataEntity extends BaseEntity {
  getValueOFForeignKey(foreignKey: string) {
    switch (foreignKey) {
        case 'PID':
            return this.PID.value;
            break;
        case 'Type':
            return this.Type.value;
        case 'HerkunftID':
            return this.HerkunftID.value;
        case 'Datum':
            return this.Datum.value;
        default:
            break;
    }
  }
    PID: SecondaryKey<number>;
    Type: SecondaryKey<DataType>;
    HerkunftID: SecondaryKey<number>;
    Datum: SecondaryKey<Date>;
    Werte: AbhängigeVariable;

    WerteAsKey: SecondaryKey<AbhängigeVariable>;
    constructor() {
        super();
        this.Werte = <AbhängigeVariable>{ Menge: 0 , DeltaPreis: 0 , PreisEinkauf: 0 , PreisPS: 0};
        this.PID = new SecondaryKey<number>();
        this.Type = new SecondaryKey<DataType>();
        this.HerkunftID = new SecondaryKey<number>();
        this.Datum = new SecondaryKey<Date>();
        this.WerteAsKey = new SecondaryKey<AbhängigeVariable>();
    }


    static parseJSON( json:any): DataEntity {
        var returner = new DataEntity();
        var object = json;
        returner.Datum = new SecondaryKey<Date>(new Date(object.DatumString));
        returner.HerkunftID = new SecondaryKey<number>(object.HerkunftID);
        returner.ID = new PrimaryKey_ID(object.DataID);
        returner.NAME = new SecondaryKey<string>(object.ProductName);
        returner.PID = new SecondaryKey<number>(object.PID);
        returner.Type = new SecondaryKey<DataType>(object.Type);
        returner.Werte.Menge = object.Menge;
        returner.Werte.PreisEinkauf = object.PreisEinkauf;
        returner.Werte.PreisPS = object.PreisPS;
        return returner;
    }
}