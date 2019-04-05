import { Component, OnInit } from '@angular/core';
import { LineService } from '../providers/line.service';

@Component({
  selector: 'app-data-entity-card',
  templateUrl: './data-entity-card.component.html',
  styleUrls: ['./data-entity-card.component.css']
})
export class DataEntityCardComponent implements OnInit {

  Value = 50.0;
  Values = [];


  constructor(private   LineService : LineService) {}

  ngOnInit() {}

  public FutureDivExpands(e){
    document.getElementById("FutureDiv").style.width = "150px";
    document.getElementById("WertDiv").style.width = "45px";
    document.getElementById("PastDiv").style.width = "5px";
  }

  NormalDiv(){
    document.getElementById("FutureDiv").style.width = "50px";
    document.getElementById("WertDiv").style.width = "100px";
    document.getElementById("PastDiv").style.width = "50px";
  }

  PastDivExpands(){
    document.getElementById("FutureDiv").style.width = "5px";
    document.getElementById("WertDiv").style.width = "45px";
    document.getElementById("PastDiv").style.width = "150px";
  }



}




