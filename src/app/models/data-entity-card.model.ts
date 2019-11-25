import { Type } from '@angular/core';
import { DataEntity } from './data-entity.model';
import { SecondaryKey } from '../shared/models/secundary-key';
import { BaseEntity } from '../shared/models/base-entity';




export class DataEntityCard extends BaseEntity {

    CurrentValue : DataEntity;
    PastValues: DataEntity[];
    PostValues: DataEntity[];

    Filtrierung: SecondaryKey<any>;
    constructor(public component: Type<any>, filtrierung: SecondaryKey<any>){
        super();
        this.Filtrierung = filtrierung;
    }    
}
