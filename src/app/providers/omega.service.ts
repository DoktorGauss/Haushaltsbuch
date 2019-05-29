import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmegaService {

  constructor() { }

  public makePotenzMenge( menge: string , omega: string ): string {
    var returner: string = '{' + this.stringAsMengenString(menge);
    var truer: boolean[] = [];
    while ( this.checkOmega(truer) == false ) {
      returner += this.checkOmegaInPotenzMenge(returner, omega);
      returner += this.checkKomplementinPotenzMenge(returner , menge, omega);
      returner += this.checkVereinigungInPotenzMenge(returner,menge);
    }
    return returner;
  }

  private checkVereinigungInPotenzMenge(returner: string, menge: string) {
    
  }

  private checkKomplementinPotenzMenge(returner: string, menge: string, omega: string) {
    for (let index = 0; index < returner.length; index++) {
      const element = returner[index];
      var komplement = this.stringAsMengenString(this.getKomplement(element, omega));
      returner += (komplement + ',');
    }
    return returner;
  }

  private getKomplement(menge: string, omega: string): string {
    var returner: string = ''
    for (let index = 0; index < omega.length; index++) {
      const element = omega[index];
      const foundInMenge = menge.search(element);
      if( foundInMenge == -1 ){
        returner += element;
      }
    }
    return returner;
  }

  private checkOmegaInPotenzMenge(returner: string, omega: string) {
    const omegaSearch = returner.search(omega);
    if (omegaSearch == -1) {
      returner += (this.stringAsMengenString(omega) + ',');
    }
    return returner;
  }

  private stringAsMengenString(menge: string) {
    var mengeAsString = this.createElementsFromMengeAsString(menge);
    return '{' + mengeAsString + '}';
  }

  private createElementsFromMengeAsString(omega: string) {
    var returner = '{';
    for (let index = 0; index < omega.length; index++) {
      const element = omega[index];
      if (index == omega.length - 1) {
        returner += element;
      }
      returner += (element + ',');
    }
    returner += '}';
    return returner;
  }

  private checkOmega(truer: boolean[]): boolean{
    var returner: boolean = true;
    for (let index = 0; index < truer.length; index++) {
      if(truer[index] == false){
        return false;
      }
    }
    return returner;
  }
}
