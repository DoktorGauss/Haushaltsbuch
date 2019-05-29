
    
    
    
    
    
export class Menge{
    private elements: Char[];

    public get() : string{
        return this.makeDarstellung();
    }
    private makeDarstellung(): string {
        var returner: string = '{';
        for (let index = 0; index < this.elements.length; index++) {
            const element = this.elements[index];
            returner += ( element.getValue() + ',');
        }
        returner += '}';
        return returner;
    }

    addElement(element: string){
        this.elements.push(new Char(element));
    }

}

export class Char {
    private _value:number;

    constructor(char: Number | String){
        this.setValue(char);
    }

    public getValue():String {
        return String.fromCharCode(this._value);
    }
    public setValue(char: Number | String) {
          if (typeof char === "number") {
              this._value = char;
          }
          else {
            const dchar = char as String;
            this._value = dchar.charCodeAt(0);
          }
    }
}

