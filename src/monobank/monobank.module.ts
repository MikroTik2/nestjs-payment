import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { MonoBankController } from "@/monobank/controllers";
import { MonoBankService } from "@/monobank/services";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: (config: ConfigService) => ({
                baseURL: 'https://api.monobank.ua/api',
                headers: {
                    "Content-Type": "application/json",
                    "X-Token": config.get<string>('TEST_PRIVATE_KEY_MONOBANK'),
                },
            }),

            inject: [ConfigService]
        }),
    ],
    controllers: [MonoBankController],
    exports: [MonoBankService],
    providers: [MonoBankService],
})

export class MonoBankModule {};