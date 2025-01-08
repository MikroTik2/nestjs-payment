export interface IInvoiceResponse {
    result: string;
    action: string;
    amount: number;
    currency: string;
    description: string;
    href: string;
    id: number;
    order_id: string;
    receiver_type: string;
    receiver_value: string;
    status: string;
    token: string;
}

export interface IInvoiceErrorResponse {
    code: string;
    err_code: string;
    err_description: string;
    result: string;
    status: string;
}