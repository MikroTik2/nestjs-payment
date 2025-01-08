import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { MonoBankController } from "@/monobank/controllers";
import { MonoBankService } from "@/monobank/services";

@Module({
    imports: [
        HttpModule,
    ],
    controllers: [MonoBankController],
    exports: [MonoBankService],
    providers: [MonoBankService],
})

export class MonoBankModule {};