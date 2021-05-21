import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleofficeComponent } from './saleoffice.component';

describe('SaleofficeComponent', () => {
  let component: SaleofficeComponent;
  let fixture: ComponentFixture<SaleofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
