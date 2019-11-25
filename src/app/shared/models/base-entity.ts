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
    id: PrimaryKey_ID;
    name: SecondaryKey<string>;

    constructor(){
        this.id = new PrimaryKey_ID();
        this.name = new SecondaryKey<string>('BaseEntity');
    }
}