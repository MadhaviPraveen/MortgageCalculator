import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

    this.paymentPlanForm = new FormGroup({
      mortgageAmount: new FormControl(0.0),
      interestRate: new FormControl(5.00),
      amortizationYears: new FormControl(),
      amortizationMonths: new FormControl(),
      paymentFrequency: new FormControl(),
      term: new FormControl()
    });
  }

  paymentPlanForm: FormGroup;
  mortgageService: MortgageService;
  paymentPlan: PaymentPlan;

  ngOnInit(): void {
  }

  getFrequency(): {label: string, value: number}[] {
    return [
      {label: 'Weekly', value: 52},
      {label: 'Bi-Weekly (every 2 weeks)', value: 26},
      {label: 'Semi-monthly (24x per year)', value: 24},
      {label: 'Monthly (12x per year)', value: 12 }
    ];
  }
}
