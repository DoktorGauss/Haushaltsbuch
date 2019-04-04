import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBillComponent } from './scan-bill.component';

describe('ScanBillComponent', () => {
  let component: ScanBillComponent;
  let fixture: ComponentFixture<ScanBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
