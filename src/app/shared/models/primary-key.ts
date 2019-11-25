import { BaseAttribut } from './base-attribut';



/**
* // TODO: all done
* @class PrimaryKey Object. To handle all primary keys with an ID 
* @param name name for Debugging
* @param value value of ID
* @param zeahler how many primarykeys are out there?
* @param highestValue ID_i+1 = ID_i + 1  ==> highestValue = ID_i
*/
export class PrimaryKey_ID extends BaseAttribut<number>{
    name = 'PrimaryKey';

    value = 0;

    static zeahler: number = 0;
    static highestValue: number = 0;

    constructor(val: number = 0){
        super();
        this.value = (val == 0) ? PrimaryKey_ID.highestValue + 1 : val;
        if( this.value > PrimaryKey_ID.highestValue) PrimaryKey_ID.highestValue = val;
        PrimaryKey_ID.zeahler++;
    }
}
