import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgarComponent } from './general-ledgar.component';

describe('GeneralLedgarComponent', () => {
  let component: GeneralLedgarComponent;
  let fixture: ComponentFixture<GeneralLedgarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralLedgarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLedgarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
