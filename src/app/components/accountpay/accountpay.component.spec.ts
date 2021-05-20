import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountpayComponent } from './accountpay.component';

describe('AccountpayComponent', () => {
  let component: AccountpayComponent;
  let fixture: ComponentFixture<AccountpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
