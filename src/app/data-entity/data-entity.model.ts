


    //   { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
    enum DataType{
        Kosten = "Kosten",
        Lohn = "Lohn",
        RegelmeasigeKosten = "RegelmeasigeKosten",
        RegelmeasigerLohn = "RegelmeasigerLohn",
        GescheatzteKosten = "GescheatzteKosten",
        GescheatzerLohn = "GescheatzerLohn"
    }

    // über diese Typen können Karten erstellt werden ==> Die Daten Liste neu sortiert
    enum DataBaseEntities{
        Datum = "Datum",
        PID = "ProductID",
        Type = "Type",
        HerkunftID = "HerkunftID"
    }

export class DataEntity {
    // details
    DatumString: string;
    ProductName: string;
    // Primary Key
    DataID: number; // if we make a Card from DataID, the Card is just the Entity
    // or
    Datum: Date; // Card from Dates, Tagesgeschäft

    // ForeignKey
    PID: number; // produkt  Card over product id
    Type: DataType; // card over data type
    HerkunftID: number; // card over laden id
    

    // Visible for end user  // Power
    Menge: number; 
    PreisPS: number; 
    PreisEinkauf: number;
    DeltaPreis: number;

    // Graph:   Card Over Key: K =>   Graph over Card(K) over Key F over Power P

     constructor(){
    }
}

// { DataID: 101, PID: 1, ProductName: 'Milch1', Menge: 1, PreisPS: 0.62, Preis: 0.68 },
// 
