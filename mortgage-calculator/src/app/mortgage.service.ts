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
  paymentTotals: any;

  get values() {
    return this.value$.asObservable();
  }

  setValues(calculationSummary: CalculationSummary) {
    this.value$.next(calculationSummary);
  }

  public getCalculationSummary(): CalculationSummary {
    return this.calculationSummary;
  }

  public calculateCalculationSummary(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan){
    const interest = Number(paymentPlan.interestRate) / 100;
    const currPaymentFrequency = Number(paymentPlan.paymentFrequency);
    const time = Number(paymentPlan.amortizationYears * currPaymentFrequency + paymentPlan.amortizationMonths);
    const payment = Number((paymentPlan.mortgageAmount * interest) / (1 - Math.pow(1 + interest, -time)));
    this.calculationSummary.numberOfPayments = time;
    this.calculationSummary.interestPayment = this.getInterestPayment(paymentPlan, prePaymentPlan);
    this.calculationSummary.mortgagePayment = this.getPaymentAmount(paymentPlan, prePaymentPlan);
    this.setValues(this.calculationSummary);
  }

  public getPaymentAmount(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan): number {
    const P = Number(paymentPlan.mortgageAmount) - Number(prePaymentPlan.prePaymentAmount);
    const r = Number(paymentPlan.interestRate);
    const n = Number(paymentPlan.paymentFrequency);
    const time = Number(paymentPlan.amortizationYears * Number(paymentPlan.paymentFrequency) +  Number(paymentPlan.amortizationMonths));
    const val = (1 + r / n);
    const payment = P * (r / n) * Math.pow(val, time) / Math.pow(val, time) - 1;
    return payment;
  }

  public getInterestPayment(paymentPlan: PaymentPlan, prePaymentPlan: PrePaymentPlan): number {
    const P = Number(paymentPlan.mortgageAmount) - Number(prePaymentPlan.prePaymentAmount);
    const r = Number(paymentPlan.interestRate);
    const frequency = Number(paymentPlan.paymentFrequency);
    return P * (r / frequency);
  }

  constructor() { }
}
