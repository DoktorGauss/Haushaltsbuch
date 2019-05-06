import { Type } from '@angular/core';
import { DataEntity } from './data-entity.model';




export class DataEntityCard {

    Value : DataEntity;
    PastValues: DataEntity[];
    PostValue: DataEntity;

    ForeignKey: string;
    PrimaryKey: string;


    constructor(public component: Type<any>, foreignKey: string, primaryKey: string){
        this.ForeignKey = foreignKey;
        this.PrimaryKey = primaryKey;
    }

    getCardTitle(): string {
        // enum ForeignKey{
        //     Datum = "Datum",
        //     PID = "ProductID",
        //     Type = "Type",
        //     HerkunftID = "HerkunftID"
        // }
        switch (this.ForeignKey) {
                case  "Datum":
                    return this.Value.DatumString;
                break;
                case  "ProductID":
                    return this.Value.ProductName;
                break;
                case  "Type":
                    return this.Value.Type;
                break;
                case  "HerkunftID":
                    switch (this.Value.HerkunftID) {
                            case 1:
                                return "AldiNord";
                            break;
                            case 2:
                                return "AldiSued";
                            break;
                            case 3:
                                return "Lidl";
                            break;
                            case 4:
                                return "Netto";
                            break;
                            case 5:
                                return "Rewe";
                            break;
                        default:
                            return "HomeMade";
                            break;
                    }
                break;
            default:
                    return this.Value.ProductName;
                break;
        }
      }
    
    
}
