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
  calculationSummary: CalculationSummary = new CalculationSummary();

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


  public calculateCalculationSummary(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan){
    console.log('prePaymentPlan inside service:', prePaymentPlan);
    console.log('paymentPlan inside service:', paymentPlan);
    console.log(paymentPlan.interestRate);
    const interest = Number(paymentPlan.interestRate) / 100;
    console.log('------------------->', interest);
    const currPaymentFrequency = Number(paymentPlan.paymentFrequency);
    const time = Number(paymentPlan.amortizationYears * currPaymentFrequency + paymentPlan.amortizationMonths);
    const payment = Number((paymentPlan.mortgageAmount * interest) / (1 - Math.pow(1 + interest, -time)));
    console.log(interest, currPaymentFrequency, time, payment);
    // this.calculationSummary.interestPayment = 5;
    // this.calculationSummary.mortgagePayment = 5;
    this.setValues(this.calculationSummary);
  }

  constructor() { }
}
