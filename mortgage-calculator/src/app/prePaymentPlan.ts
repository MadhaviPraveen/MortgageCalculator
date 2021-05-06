export class PrePaymentPlan {
    prePaymentAmount: number;
    prePaymentFrequency: string;
    startWithPayment: number;

    constructor(prePaymentAmount: number, prePaymentFrequency: string, startWithPayment: number){
        this.prePaymentAmount = prePaymentAmount;
        this.prePaymentFrequency = prePaymentFrequency;
        this.startWithPayment = startWithPayment;
    }


}

