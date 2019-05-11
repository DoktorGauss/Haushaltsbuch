import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // must have
import { MatListModule,MatButtonModule, MatCheckboxModule } from '@angular/material'; // must have
import { BrowserModule } from '@angular/platform-browser'; // must have 
import { NgModule } from '@angular/core'; // must have 
import { AppComponent } from './app.component'; // must have
import { DataEntityTableComponent } from './components/data-entity/data-entity-table.component'; // data entity table
import { DataEntityCardComponent } from './components/data-entity-card/data-entity-card.component'; // data entity card
import { DataEntityCardTableComponent } from './components/data-entity-card-table/data-entity-card-table.component'; // data entity card table
import { AppRoutingModule } from './app-routing.module'; // must have : routing
import { GridModule, GroupService, FilterService, SortService, PageService } from '@syncfusion/ej2-angular-grids'; // data entity table 
import { CameraOCRComponent } from './components/camera-ocr/camera-ocr.component'; // ocr
import { CardPipePipe } from './pipes/card-pipe.pipe'; // pipe for my cards 


// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">    in html wenn nice button


@NgModule({
  declarations: [ //insert as html 
    AppComponent,
    DataEntityTableComponent,
    DataEntityCardTableComponent,
    DataEntityCardComponent,
    CameraOCRComponent,
    CardPipePipe
  ],
  imports: [ // Logic handlers
    BrowserModule,
    AppRoutingModule,
    GridModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [PageService, SortService, FilterService, GroupService],  // Services
  bootstrap: [AppComponent]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { } 
