import { BaseEntity } from '../shared/models/base-entity';
import { SecondaryKey } from '../shared/models/secundary-key';



//   { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
enum DataType {
    Kosten = "Kosten",
    Lohn = "Lohn",
    RegelmeasigeKosten = "RegelmeasigeKosten",
    RegelmeasigerLohn = "RegelmeasigerLohn",
    GescheatzteKosten = "GescheatzteKosten",
    GescheatzerLohn = "GescheatzerLohn"
}

interface AbhängigeVariable {
    Menge: number;
    PreisPS: number;
    PreisEinkauf: number;
    DeltaPreis: number;
}


export class DataEntity extends BaseEntity {
    PID: SecondaryKey<number>;
    Type: SecondaryKey<DataType>;
    HerkunftID: SecondaryKey<number>;
    Datum: SecondaryKey<Date>;
    Werte: AbhängigeVariable;
}