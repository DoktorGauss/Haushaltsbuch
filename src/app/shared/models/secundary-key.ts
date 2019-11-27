import { BaseAttribut } from './base-attribut';

export class SecondaryKey<T> extends BaseAttribut<T> {
    name = 'SecondaryKey';

    
    public get SecondaryKey() : string {
        return this.value;
    }
    
    value = null;

    static zeahler: number = 0;
    constructor(val: T = null) {
        super();
        SecondaryKey.zeahler++;
        this.value = val;
    }

    static create(type: string, value: string, name: string = 'secondaryKey') {
        var key;
        switch (type) {
            case 'PID':
                // the produkt ID as Filter Key
                key = new SecondaryKey<number>(Number.parseInt(value));
                break;
            case 'Type':
                key = new SecondaryKey<string>(value);
                break;
            case 'HerkunftID':
                key = new SecondaryKey<string>(value);
                break;
            case 'Datum':
                key = new SecondaryKey<Date>(new Date(Date.parse(value)));
                break;
            case 'DataID':
                key = new SecondaryKey<number>(Number.parseInt(value));
                break;
            default:
                break;
        }
        key.name = name;
        return key;
    }
}
