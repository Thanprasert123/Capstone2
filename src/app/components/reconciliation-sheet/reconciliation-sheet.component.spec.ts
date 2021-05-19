import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationSheetComponent } from './reconciliation-sheet.component';

describe('ReconciliationSheetComponent', () => {
  let component: ReconciliationSheetComponent;
  let fixture: ComponentFixture<ReconciliationSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconciliationSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
