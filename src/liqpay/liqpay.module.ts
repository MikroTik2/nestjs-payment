import { Module } from "@nestjs/common";
import { LiqPayService } from "@/liqpay/services";
import { LiqPayController } from "@/liqpay/controllers";

@Module({
    imports: [],
    controllers: [LiqPayController],
    providers: [LiqPayService],
    exports: [LiqPayService],
})

export class LiqPayModule {};