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
    this.mortgageService.calculateCalculationSummary(this.paymentPlanForm.paymentPlanForm.value, this.prePaymentForm.prePaymentForm.value);
  }

  ngOnInit(): void {}

}


