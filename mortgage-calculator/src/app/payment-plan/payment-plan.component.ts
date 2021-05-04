import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {PaymentPlan} from '../PaymentPlan';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {

  mortgageAmount = new FormControl('0.0');
  interestRate = new FormControl('5.00');
  amortizationYears = new FormControl('');
  amortizationMonths = new FormControl('');
  paymentFrequency = new FormControl('');
  term = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
