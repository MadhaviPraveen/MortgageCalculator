export class CalculationSummary{
    numberOfPayments: number;
    mortgagePayment: number;
    prePayment: number;
    principalAmount: number;
    interestPayment: number;
    totalCost: number;

    constructor(numberOfPayments: number, mortgagePayment: number, prePayment: number,
                principalAmount: number, interestPayment: number, totalCost: number) {
            this.numberOfPayments = numberOfPayments;
            this.prePayment = prePayment;
            this.mortgagePayment = mortgagePayment;
            this.principalAmount = principalAmount;
            this.interestPayment = interestPayment;
            this.totalCost = totalCost;
        }
}
