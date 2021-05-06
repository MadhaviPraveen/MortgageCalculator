import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrePaymentPlanComponent } from './pre-payment-plan/pre-payment-plan.component';
import { CalculationSummaryComponent } from './calculation-summary/calculation-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPlanComponent,
    PrePaymentPlanComponent,
    CalculationSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
