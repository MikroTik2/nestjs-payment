import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { LiqPayModule } from "@/liqpay";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        
        LiqPayModule
    ],
})
export class AppModule {}
