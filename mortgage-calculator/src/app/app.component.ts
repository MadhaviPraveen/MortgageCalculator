import { Component, OnInit, ViewChild } from '@angular/core';
import { MortgageService } from './mortgage.service';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { PrePaymentPlanComponent } from './pre-payment-plan/pre-payment-plan.component';
import { PaymentPlan } from './PaymentPlan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mortgage-calculator';
  @ViewChild('paymentPlanForm') paymentPlanForm: PaymentPlanComponent;
  @ViewChild('prePaymentForm') prePaymentForm: PrePaymentPlanComponent;
  paymentPlan: PaymentPlan = new PaymentPlan();

  constructor(private mortgageService: MortgageService) {}

  public calculate() {
    this.paymentPlan.interestRate = this.paymentPlanForm.paymentPlanForm.value.interestRate;
    this.paymentPlan.mortgageAmount = this.paymentPlanForm.paymentPlanForm.value.mortgageAmount;
    this.paymentPlan.amortizationMonths = this.paymentPlanForm.paymentPlanForm.value.amortizationMonths;
    this.paymentPlan.amortizationYears = this.paymentPlanForm.paymentPlanForm.value.amortizationYears;
    this.paymentPlan.paymentFrequency = this.paymentPlanForm.paymentPlanForm.value.paymentFrequency;
    this.paymentPlan.term = this.paymentPlanForm.paymentPlanForm.value.term;
    this.mortgageService.calculateCalculationSummary(this.paymentPlan, this.paymentPlanForm.paymentPlanForm.value);
  }

  ngOnInit(): void {}

}


