


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
    enum ForeignKey{
        Datum = "Datum",
        PID = "ProductID",
        Type = "Type",
        HerkunftID = "HerkunftID"
    }

    enum PrimaryKey{
        DataID = "DataID"
    }

export class DataEntity {
    // details
    DatumString: string;
    ProductName: string;


    // Primary Key
    DataID: number; // if we make a Card from DataID, the Card is just the Entity

    
    // ForeignKey
    PID: number; // produkt  Card over product id
    Type: DataType; // card over data type
    HerkunftID: number; // card over laden id
    Datum: Date; // Card from Dates, Tagesgeschäft
    

    // Visible for end user  // DIe Werte die wie schätzen können
    Menge: number; 
    PreisPS: number; 
    PreisEinkauf: number;
    DeltaPreis: number;



    // Graph:   Card Over Key: K =>   Graph over Card(K) over Key F over Power P

     constructor(){
    }

    getValueOFForeignKey(key: string){
        switch (key) {
            case "Datum":
                return this.Datum;
            break;
            case "ProductID":
                return this.PID;
            break;
            case "Type":
                return this.Type;
            break;

            case "HerkunftID":
                return this.HerkunftID;
            break;

            default:
                return this.DataID;
                break;
        }
    }
}

// { DataID: 101, PID: 1, ProductName: 'Milch1', Menge: 1, PreisPS: 0.62, Preis: 0.68 },
// 
