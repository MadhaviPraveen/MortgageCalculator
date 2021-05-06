import { Injectable } from '@angular/core';
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

  // todo: do your calculations here. This should link to the calculate button
  public calculate(): void {

  }


  constructor() { }
}
