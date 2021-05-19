import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingorderComponent } from './purchasingorder.component';

describe('PurchasingorderComponent', () => {
  let component: PurchasingorderComponent;
  let fixture: ComponentFixture<PurchasingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
