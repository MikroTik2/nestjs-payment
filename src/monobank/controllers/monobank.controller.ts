import { Controller, Post } from "@nestjs/common";
import { MonoBankService } from "@/monobank/services";
import { IInvoiceResponse } from "@/monobank/interfaces";

@Controller('/monobank')
export class MonoBankController {

    constructor(
        private readonly monobankService: MonoBankService
    ) {};

    @Post('invoice')
    async invoice(): Promise<IInvoiceResponse> {
        return this.monobankService.invoice();
    };
};