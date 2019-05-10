import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule,MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { DataEntityTableComponent } from './components/data-entity/data-entity-table.component';
import { DataEntityCardComponent } from './components/data-entity-card/data-entity-card.component';
import { DataEntityCardTableComponent } from './components/data-entity-card-table/data-entity-card-table.component';
import { AppRoutingModule } from './app-routing.module';
import { GridModule, GroupService, FilterService, SortService, PageService } from '@syncfusion/ej2-angular-grids';


// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">    in html wenn nice button


@NgModule({
  declarations: [
    AppComponent,
    DataEntityTableComponent,
    DataEntityCardTableComponent,
    DataEntityCardComponent
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
