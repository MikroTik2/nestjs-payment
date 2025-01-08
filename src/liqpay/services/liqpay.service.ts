import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as LiqPay from "liqpayjs-sdk";

export interface IGoodItem {
    amount: number;
    count: number;
    unit: string;
    name: string;
};

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

@Injectable()
export class LiqPayService {
    private readonly liqpay: LiqPay;

    constructor(private readonly configService: ConfigService) {
        this.liqpay = new LiqPay(
            this.configService.get<string>('TEST_PUBLIC_KEY_LIQPAY'), 
            this.configService.get<string>('TEST_PRIVATE_KEY_LIQPAY')
        );
    };

    async invoice() {

        const params = {
            action: "invoice_send",
            version: "3",
            description: "Оформлення заказа",
            email: "dotsenk20034@gmail.com",
            currency: "UAH",
            amount: 2000,
            order_id: "tbn789wsdfsdyy40w5t7yw84578wt",
            goods: [
                {
                    amount: 1000,
                    count: 1,
                    unit: "шт.",
                    name: 'Бомба'
                },
                {
                    amount: 1000,
                    count: 1,
                    unit: "шт.",
                    name: "Бомба"
                },
            ],
        };

        return await this.liqpay.api('request', params);
    };
};