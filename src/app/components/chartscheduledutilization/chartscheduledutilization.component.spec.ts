import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartscheduledutilizationComponent } from './chartscheduledutilization.component';

describe('ChartscheduledutilizationComponent', () => {
  let component: ChartscheduledutilizationComponent;
  let fixture: ComponentFixture<ChartscheduledutilizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartscheduledutilizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartscheduledutilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
