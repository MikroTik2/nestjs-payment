import { Controller, Get } from "@nestjs/common";
import { LiqPayService } from "@/liqpay/services";

@Controller('/liqpay')
export class LiqPayController {

    constructor(
        private readonly liqpayService: LiqPayService,
    ) {};

    @Get('invoice')
    async invoice() {
        return this.liqpayService.invoice();
    };
};