import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MortgageService } from '../mortgage.service';
import {PaymentPlan} from '../PaymentPlan';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {

  constructor(public service: MortgageService) {
    this.mortgageService = service;
  }

  mortgageAmount = new FormControl(0.0);
  interestRate = new FormControl(5.00);
  amortizationYears = new FormControl();
  amortizationMonths = new FormControl();
  paymentFrequency = new FormControl();
  term = new FormControl();
  mortgageService: MortgageService;
  paymentPlan: PaymentPlan;

  ngOnInit(): void {
  }

  // todo update the values when the calculate button is clicked
  public updateValues(): void {
    this.paymentPlan = new PaymentPlan(this.term.value, this.paymentFrequency.value,
      this.amortizationYears.value, this.amortizationMonths.value, this.interestRate.value, this.mortgageAmount.value);
    this.mortgageService.putPaymentPlan(this.paymentPlan);
  }
}
