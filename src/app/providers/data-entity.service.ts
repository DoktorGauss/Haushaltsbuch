import { GlobalsService } from './globals.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEntityService {
  createDataEntityList(): any {
    throw new Error("Method not implemented.");
  }

  public dataEntityList;

  constructor(private globalsService : GlobalsService) {
      this.dataEntityList = this.globalsService.getDataEntityList();
   }

   public getDataEntityList(){
     return this.dataEntityList;
   }
}
