import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorystockcardComponent } from './inventorystockcard.component';

describe('InventorystockcardComponent', () => {
  let component: InventorystockcardComponent;
  let fixture: ComponentFixture<InventorystockcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorystockcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorystockcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
