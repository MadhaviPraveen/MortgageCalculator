import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculationSummary } from './CalculationSummary';
import { PaymentPlan } from './PaymentPlan';
import { PrePaymentPlan } from './PrePaymentPlan';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  paymentPlan: PaymentPlan;
  prePaymentPlan: PrePaymentPlan;
  calculationSummary: CalculationSummary;

  private value$ = new BehaviorSubject(null);

  get values() {
    return this.value$.asObservable();
  }

  setValues(calculationSummary: CalculationSummary) {
    this.value$.next(calculationSummary);
  }

  getNumberOfPayments(): number{
    if (this.paymentPlan == null || this.paymentPlan === undefined) {
      return 0;
    }

    const term = this.paymentPlan.term;
    const paymentFrequency = this.paymentPlan.paymentFrequency;
    return term * paymentFrequency;
  }

  public getCalculationSummary(): CalculationSummary {
    return this.calculationSummary;
  }

  public putPaymentPlan(paymentPlan: PaymentPlan): void {
    this.paymentPlan = paymentPlan;
  }

  public putPrePaymentPlan(prePaymentPlan: PrePaymentPlan): void{
    this.prePaymentPlan = prePaymentPlan;
  }


  public calculateCalculationSummary(paymentPlan, prePaymentPlan){
    const interest = paymentPlan.interestRate / 100;
    const currPaymentFrequency = paymentPlan.paymentFrequency;
    const time = paymentPlan.amortizationYears * currPaymentFrequency + paymentPlan.amortizationMonths;
    const payment = (paymentPlan.mortgageAmount * interest) / (1 - Math.pow(1 + interest, -time));

    this.calculationSummary = new CalculationSummary(time, payment, 0, paymentPlan.mortgageAmount, interest, 0);
    this.setValues(this.calculationSummary);
  }

  constructor() { }
}
