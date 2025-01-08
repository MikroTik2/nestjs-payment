import { Controller, Get } from "@nestjs/common";
import { LiqPayService } from "@/liqpay/services";
import { IInvoiceErrorResponse, IInvoiceResponse } from "../interfaces";

@Controller('/liqpay')
export class LiqPayController {

    constructor(
        private readonly liqpayService: LiqPayService,
    ) {};

    @Get('invoice')
    async invoice(): Promise<IInvoiceResponse | IInvoiceErrorResponse> {
        return this.liqpayService.invoice();
    };
};