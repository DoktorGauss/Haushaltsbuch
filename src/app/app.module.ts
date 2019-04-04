import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DataHandlerComponent } from './data-handler/data-handler.component';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ScanBillComponent } from './scan-bill/scan-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    DataHandlerComponent,
    ScanBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
