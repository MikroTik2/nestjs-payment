import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { LiqPayModule } from "@/liqpay";
import { MonoBankModule } from "@/monobank";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        
        MonoBankModule,
        LiqPayModule,
    ],
})
export class AppModule {}
