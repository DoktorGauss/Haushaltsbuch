import { DataEntity } from '../data-entity/data-entity.model';
import { Type } from '@angular/core';




export class DataEntityCard {

    Value : DataEntity;
    PastValues: DataEntity[];
    PostValue: DataEntity;



    constructor(public component: Type<any>){
    }


    
}
