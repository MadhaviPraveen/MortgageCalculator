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

  constructor(private mortgageService: MortgageService) {
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
  paymentPlan: PaymentPlan;

  ngOnInit(): void {}

  getAmortizationYears(): {label: string, value: number}[] {
    return [
      {label: '1 Year', value: 1},
      {label: '2 Years', value: 2},
      {label: '3 Years', value: 3},
      {label: '4 Years', value: 4},
      {label: '5 Years', value: 5},
      {label: '6 Years', value: 6},
      {label: '7 Years', value: 7},
      {label: '8 Years', value: 8},
      {label: '9 Years', value: 9},
      {label: '10 Years', value: 10},
      {label: '11 Years', value: 11},
      {label: '12 Years', value: 12},
      {label: '13 Years', value: 13},
      {label: '14 Years', value: 14},
      {label: '15 Years', value: 15},
      {label: '16 Years', value: 16},
      {label: '17 Years', value: 17},
      {label: '18 Years', value: 18},
      {label: '19 Years', value: 19},
      {label: '20 Years', value: 20},
      {label: '21 Years', value: 21},
      {label: '22 Years', value: 22},
      {label: '23 Years', value: 23},
      {label: '24 Years', value: 24},
      {label: '25 Years', value: 25},
      {label: '26 Years', value: 26},
      {label: '27 Years', value: 27},
      {label: '28 Years', value: 28},
      {label: '29 Years', value: 29},
      {label: '30 Years', value: 30}
    ];
  }

  getAmortizationMonths(): {label: string, value: number}[] {
    return [
      {label: '1 Month', value: 1},
      {label: '2 Months', value: 2},
      {label: '3 Months', value: 3},
      {label: '4 Months', value: 4},
      {label: '5 Months', value: 5},
      {label: '6 Months', value: 6},
      {label: '7 Months', value: 7},
      {label: '8 Months', value: 8},
      {label: '9 Months', value: 9},
      {label: '10 Months', value: 10},
      {label: '11 Months', value: 11},
      {label: '12 Months', value: 12}
    ];
  }

  getFrequency(): {label: string, value: number}[] {
    return [
      {label: 'Weekly', value: 52},
      {label: 'Bi-Weekly (every 2 weeks)', value: 26},
      {label: 'Semi-monthly (24x per year)', value: 24},
      {label: 'Monthly (12x per year)', value: 12 }
    ];
  }

  getTerms(): {label: string, value: number}[] {
    return [
      {label: '1 Year', value: 1},
      {label: '2 Years', value: 2},
      {label: '3 Years', value: 3},
      {label: '4 Years', value: 4},
      {label: '5 Years', value: 5},
      {label: '6 Years', value: 6},
      {label: '7 Years', value: 7},
      {label: '8 Years', value: 8},
      {label: '9 Years', value: 9},
      {label: '10 Years', value: 10}
    ];
  }


}
