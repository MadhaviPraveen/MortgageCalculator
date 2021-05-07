import { TestBed } from '@angular/core/testing';

import { MortgageService } from './mortgage.service';

describe('MortgageService', () => {
  let service: MortgageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate mortgage based on payment plan', () => {
    service.paymentPlan = {
      amortizationMonths: null,
      amortizationYears: 25,
      interestRate: 5,
      mortgageAmount: 1000000,
      paymentFrequency: 12,
      term: 5
    };

    service.prePaymentPlan = {
      prePaymentAmount: 0,
      prePaymentFrequency: 'One time',
      startWithPayment: 1
    };
    service.calculateCalculationSummary(service.paymentPlan, service.prePaymentPlan);
    expect(service.calculationSummary.numberOfPayments).toBeCloseTo(300);
    expect(service.calculationSummary.mortgagePayment).toBeCloseTo(416666.6666666667);
    expect(service.calculationSummary.interestPayment).toBeCloseTo(416666.6666666667);
  });
});
