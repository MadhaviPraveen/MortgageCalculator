import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CalculationSummary } from '../CalculationSummary';
import { MortgageService } from '../mortgage.service';
import { PaymentPlanComponent } from '../payment-plan/payment-plan.component';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.css']
})
export class CalculationSummaryComponent implements OnInit {

  // numberOfPayments = new FormControl(60);
  // mortgagePayment = new FormControl(1601);
  // prePayment = new FormControl(0);
  // principalAmount = new FormControl(24714);
  // interestPayment = new FormControl(71349);
  // totalCost = new FormControl(96064);

  calculationSummary: Observable<typeof CalculationSummary>;

  mortgageService: MortgageService;
  constructor(public service: MortgageService) {
    this.mortgageService = service;
    this.calculationSummary = this.mortgageService.values;
   }

  ngOnInit(): void {}

}
