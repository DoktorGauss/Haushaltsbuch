import { PrimaryKey_ID } from './primary-key';
import { SecondaryKey } from './secundary-key';

/**
* // TODO: all done
* @class BaseAttribut for any Attributs out there with a zeahler to determine their density
* @param name name for Debugging
* @param value value 
* @param zeahler how many BaseAttributs are out there?
*/
export class BaseEntity {
    ID: PrimaryKey_ID;
    NAME: SecondaryKey<string>;

    
    public get idAsString() : string {
        return this.ID.value.toString();
    }

    public set idAsString(s: string){
        this.ID.value = Number.parseFloat(s);
    }

    
    public get name() : string {
        return this.NAME.value;
    }
    
    public set name(s:string){
        this.NAME.value = s;
    }
    
    constructor(){
        this.ID = new PrimaryKey_ID();
        this.NAME = new SecondaryKey<string>('BaseEntity');
    }
}