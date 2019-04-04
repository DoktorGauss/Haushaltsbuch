import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHandlerComponent } from './data-handler.component';

describe('DataHandlerComponent', () => {
  let component: DataHandlerComponent;
  let fixture: ComponentFixture<DataHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
