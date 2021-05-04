import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePaymentPlanComponent } from './pre-payment-plan.component';

describe('PrePaymentPlanComponent', () => {
  let component: PrePaymentPlanComponent;
  let fixture: ComponentFixture<PrePaymentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrePaymentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePaymentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
