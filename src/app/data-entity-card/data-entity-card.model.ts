import { DataEntity } from '../data-entity/data-entity.model';




export class DataEntityCard {

    Value : DataEntity;
    PastValues: DataEntity[];
    PostValue: DataEntity;

    constructor(v : DataEntity, paV : DataEntity[], poV : DataEntity){
        this.Value = v;
        this.PastValues = paV;
        this.PostValue = poV;
    }
}
