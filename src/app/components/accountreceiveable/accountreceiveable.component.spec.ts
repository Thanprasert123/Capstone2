import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountreceiveableComponent } from './accountreceiveable.component';

describe('AccountreceiveableComponent', () => {
  let component: AccountreceiveableComponent;
  let fixture: ComponentFixture<AccountreceiveableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountreceiveableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountreceiveableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
