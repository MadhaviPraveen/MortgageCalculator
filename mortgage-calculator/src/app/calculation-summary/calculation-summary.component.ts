import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.css']
})
export class CalculationSummaryComponent implements OnInit {

  numberOfPayments = new FormControl(60);
  mortgagePayment = new FormControl(1601);
  prePayment = new FormControl(0);
  principalAmount = new FormControl(24714);
  interestPayment = new FormControl(71349);
  totalCost = new FormControl(96064);


  mortgageService: MortgageService;
  constructor(public service: MortgageService) {
    this.mortgageService = service;
   }

  ngOnInit(): void {}

}
