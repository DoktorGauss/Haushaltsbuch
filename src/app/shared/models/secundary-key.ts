import { BaseAttribut } from './base-attribut';

export class SecondaryKey<T> extends BaseAttribut<T> {
    name = 'SecondaryKey';

    value = null;

    static zeahler: number = 0;
    constructor(val: T = null){
        super();
        SecondaryKey.zeahler++;
        this.value = val;
    }
}
