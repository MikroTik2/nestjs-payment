import { IGoodItem } from "./good-item.interface";

export interface IInvoiceParams {
    action: string;
    version: string;
    description: string;
    email: string;
    currency: string;
    amount: number;
    order_id: string;
    goods: IGoodItem[];
};