import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalizingTransactionComponent } from './journalizing-transaction.component';

describe('JournalizingTransactionComponent', () => {
  let component: JournalizingTransactionComponent;
  let fixture: ComponentFixture<JournalizingTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalizingTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalizingTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
