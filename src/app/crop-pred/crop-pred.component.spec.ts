import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPredComponent } from './crop-pred.component';

describe('CropPredComponent', () => {
  let component: CropPredComponent;
  let fixture: ComponentFixture<CropPredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropPredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
