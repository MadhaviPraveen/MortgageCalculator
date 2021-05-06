export class PaymentPlan {
    mortgageAmount: number;
    interestRate: number;
    amortizationYears: number;
    amortizationMonths: number;
    paymentFrequency: number;
    term: number;

    constructor(term: number, paymentFrequency: number, amortizationYears: number,
                amortizationMonths: number, interestRate: number, mortgageAmount: number) {
        this.term = term;
        this.mortgageAmount = mortgageAmount;
        this.paymentFrequency = paymentFrequency;
        this.amortizationYears = amortizationYears;
        this.interestRate = interestRate;
        this.amortizationMonths = amortizationMonths;
      }
}
