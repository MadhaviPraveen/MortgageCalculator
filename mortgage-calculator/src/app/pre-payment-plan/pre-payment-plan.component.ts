import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MortgageService } from '../mortgage.service';
import { PrePaymentPlan } from '../PrePaymentPlan';

@Component({
  selector: 'app-pre-payment-plan',
  templateUrl: './pre-payment-plan.component.html',
  styleUrls: ['./pre-payment-plan.component.css']
})
export class PrePaymentPlanComponent implements OnInit {
  prePayment: PrePaymentPlan;
  prePaymentForm: FormGroup;

  constructor(private mortgageService: MortgageService) {
    this.prePaymentForm = new FormGroup({
      prePaymentAmount: new FormControl(0),
      prePaymentFrequency: new FormControl('One time'),
      startWithPayment: new FormControl(1)
    });
  }

  ngOnInit(): void {}

}
