import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraOCRComponent } from './camera-ocr.component';

describe('CameraOCRComponent', () => {
  let component: CameraOCRComponent;
  let fixture: ComponentFixture<CameraOCRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraOCRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraOCRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
