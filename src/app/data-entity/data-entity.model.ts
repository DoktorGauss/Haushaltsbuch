



export class DataEntity {
    dataId: number;
    produktId: number;
    produktName: string;
    menge: number;
    preisProStueck: number;
    preisEinkauf: number;

    constructor(ID, PID, PN, M, PPS, PE){
        this.dataId = ID;
        this.produktId = PID;
        this.produktName = PN;
        this.menge = M;
        this.preisProStueck = PPS;
        this.preisEinkauf = PE;
    }
}

// { DataID: 101, PID: 1, ProductName: 'Milch1', Menge: 1, PreisPS: 0.62, Preis: 0.68 },
// 
