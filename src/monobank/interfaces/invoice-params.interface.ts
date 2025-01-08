interface IBasketItem {
    name: string,
    qty: number,
    sum: number,
    unit: string,
    icon: string,
    code: string,
};

interface IMerchantPaymInfo {
    destination: string;
    comment: string;
    basketOrder: IBasketItem[]
};

export interface IInvoiceParams {
    amount: number;
    ccy: number;
    merchantPaymInfo: IMerchantPaymInfo;
    redirectUrl: string;
    webHookUrl: string;
    paymentType: string;
};