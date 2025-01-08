import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as LiqPay from "liqpayjs-sdk";
import { IInvoiceParams, IInvoiceResponse, IInvoiceErrorResponse } from "@/liqpay/interfaces";

@Injectable()
export class LiqPayService {
    private readonly liqpay: LiqPay;

    constructor(private readonly configService: ConfigService) {
        this.liqpay = new LiqPay(
            this.configService.get<string>('TEST_PUBLIC_KEY_LIQPAY'), 
            this.configService.get<string>('TEST_PRIVATE_KEY_LIQPAY')
        );
    };

    async invoice(): Promise<IInvoiceResponse | IInvoiceErrorResponse> {

        const params: IInvoiceParams = {
            action: "invoice_send",
            version: "3",
            description: "Оформление заказа",
            email: "dotsenk20034@gmail.com",
            currency: "UAH",
            amount: 2000,
            order_id: "ifjgos548g75g857t9gw85g5wkjhrgkw4ug",
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