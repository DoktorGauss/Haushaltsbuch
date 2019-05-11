


    //   { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
    enum DataType{
        Kosten = "Kosten",
        Lohn = "Lohn",
        RegelmeasigeKosten = "RegelmeasigeKosten",
        RegelmeasigerLohn = "RegelmeasigerLohn",
        GescheatzteKosten = "GescheatzteKosten",
        GescheatzerLohn = "GescheatzerLohn"
    }



    interface UnabhängigeVariable{
        ID: number;
        Date: Date;
        DateID: number;
    }

    interface AbhängigeVariable{
        Menge: number; 
        PreisPS: number; 
        PreisEinkauf: number;
        DeltaPreis: number;
    }

    interface Schlüssel{
        ProduktID: number; 
        ProduktType: DataType; 
        HerkunftID: number; 
    }

    interface Darstellung{
        DataName: string;
        DataValue: string;
    }

    interface Speicher{
        json: JSON;
    }


export class DataEntity {

    unabhVar: UnabhängigeVariable;
    abhVar: AbhängigeVariable;
    schluessel: Schlüssel;
    darstellung: Darstellung;

    speicher: Speicher;



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


    getJSON(): JSON {
        return this.speicher.json;
    }

    createJSON(uV: UnabhängigeVariable, aV: AbhängigeVariable, s: Schlüssel, d: Darstellung){
        const obj: any = 
        {
            "id" : uV.ID.toString(),
            "Date" : uV.Date.toString(),
            "DateID" : uV.DateID.toString(),
            "Menge" : aV.Menge.toString(),
            "PreisPS" : aV.PreisPS.toString(),
            "PreisEinkauf" : aV.PreisEinkauf.toString(),
            "DeltaPreis" : aV.DeltaPreis.toString(),
            "ProduktID" : s.ProduktID.toString(),
            "ProduktType" : s.ProduktType.toString(),
            "HerkunftID" : s.HerkunftID.toString(),
            "DataName" : d.DataName.toString(),
            "DataValue" : d.DataValue.toString()
        };
        return <JSON>obj;
    }

    createEntityFromJSON(json: JSON){

    }
}
