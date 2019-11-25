/**
* // TODO: all done
* @class BaseAttribut for any Attributs out there with a zeahler to determine their density
* @param name name for Debugging
* @param value value 
* @param zeahler how many BaseAttributs are out there?
*/
export class BaseAttribut<T> {
    public name: string;

    public value: T;

    static zeahler: number = 0;

    constructor(){
        BaseAttribut.zeahler++;
    }
}