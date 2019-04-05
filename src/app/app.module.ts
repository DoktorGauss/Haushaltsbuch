import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DataEntityTableComponent } from './data-entity/data-entity-table.component';
import { DataEntityCardComponent } from './data-entity-card/data-entity-card.component';
import { DataEntityCardTableComponent } from './data-entity-card-table/data-entity-card-table.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">    in html wenn nice button


@NgModule({
  declarations: [
    AppComponent,
    DataEntityTableComponent,
    DataEntityCardComponent,
    DataEntityCardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
