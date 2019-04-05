import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
   public DATA_ENTITY_LIST;

  constructor() {
    
    

    
    this.DATA_ENTITY_LIST = [
      { DataID: 100, PID: 1, ProductName: 'Milch1', Menge: 2, PreisPS: 0.68, Preis: 1.36 },
      { DataID: 102, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 103, PID: 1, ProductName: 'Milch1', Menge: 5, PreisPS: 0.67, Preis: 3.35 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 104, PID: 1, ProductName: 'Milch1', Menge: 3, PreisPS: 0.68, Preis: 2.04 },
      { DataID: 105, PID: 2, ProductName: 'Brot1', Menge: 1, PreisPS: 0.35, Preis: 0.35 },
      { DataID: 106, PID: 3, ProductName: 'Brot2', Menge: 2, PreisPS: 0.32, Preis: 0.64 },
      { DataID: 107, PID: 2, ProductName: 'Brot1', Menge: 3, PreisPS: 0.34, Preis: 1.02 },
      { DataID: 108, PID: 3, ProductName: 'Brot2', Menge: 4, PreisPS: 0.32, Preis: 1.28 },
      { DataID: 109, PID: 2, ProductName: 'Brot1', Menge: 5, PreisPS: 0.33, Preis: 1.65 },
      { DataID: 110, PID: 3, ProductName: 'Brot2', Menge: 3, PreisPS: 0.32, Preis: 0.96 },
    ];
  }

  public getDataEntityList(){
    return this.DATA_ENTITY_LIST;
  }
  
}
