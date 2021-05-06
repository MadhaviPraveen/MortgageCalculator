import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationSummary } from '../CalculationSummary';
import { MortgageService } from '../mortgage.service';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.css']
})
export class CalculationSummaryComponent implements OnInit {

  calculationSummary: Observable<CalculationSummary>;

  constructor(private mortgageService: MortgageService) {
    this.calculationSummary = this.mortgageService.values;
   }

  ngOnInit(): void {}

}
