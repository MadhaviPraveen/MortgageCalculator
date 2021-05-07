import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculationSummary } from './CalculationSummary';
import { PaymentPlan } from './PaymentPlan';
import { PaymentSchedule } from './PaymentSchedule';
import { PrePaymentPlan } from './PrePaymentPlan';

@Injectable({
  providedIn: 'root'
})
export class MortgageService {
  paymentPlan: PaymentPlan;
  prePaymentPlan: PrePaymentPlan;
  calculationSummary: CalculationSummary = new CalculationSummary();

  private value$ = new BehaviorSubject(null);
  paymentTotals: any;
  paymentSchedule: PaymentSchedule[];

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
    this.calculationSummary.numberOfPayments = time;
    this.calculationSummary.interestPayment = this.getInterestPayment(paymentPlan, prePaymentPlan);
    this.calculationSummary.mortgagePayment = this.getPaymentAmount(paymentPlan, prePaymentPlan);
    console.log(this.calculationSummary);
    this.setValues(this.calculationSummary);

  }

  public getPaymentAmount(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan): number {

    /*Defaulted to one time prepayment only */
    const P = Number(paymentPlan.mortgageAmount) - Number(prePaymentPlan.prePaymentAmount);
    const r = Number(paymentPlan.interestRate);
    const n = Number(paymentPlan.paymentFrequency);
    const time = Number(paymentPlan.amortizationYears * Number(paymentPlan.paymentFrequency) +  Number(paymentPlan.amortizationMonths));
    console.log(P + '--- ' + r + ' --- ' + n + ' -- ' + time);
    const val = (1 + r / n);
    const payment = P * (r / n) * Math.pow(val, time) / Math.pow(val, time) - 1;
    console.log(val + ' -- ' + payment);
    return payment;
  }

  public getInterestPayment(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan): number {
    /*Defaulted to one time prepayment only */
    const P = Number(paymentPlan.mortgageAmount) - Number(prePaymentPlan.prePaymentAmount);
    const r = Number(paymentPlan.interestRate);
    const frequency = Number(paymentPlan.paymentFrequency);
    return P * (r / frequency);
  }

  constructor() { }
}
