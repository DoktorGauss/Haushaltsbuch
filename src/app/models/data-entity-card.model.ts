import { Type } from '@angular/core';
import { DataEntity } from './data-entity.model';




export class DataEntityCard {

    Value : DataEntity;
    PastValues: DataEntity[];
    PostValue: DataEntity;

    ForeignKey: string;
    PrimaryKey: string;


    constructor(public component: Type<any>){
    }


    
}
