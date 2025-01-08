import { Injectable, Logger } from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { ConfigService } from "@nestjs/config";
import { catchError, map } from 'rxjs';
import { IInvoiceParams } from "@/monobank/interfaces";
import { AxiosError } from "axios";
import { IInvoiceResponse } from "@/monobank/interfaces";

@Injectable()
export class MonoBankService {
    private readonly logger = new Logger(MonoBankService.name);
    private baseUrl = 'https://api.monobank.ua/api';
    private _token;

    constructor(
        private readonly http: HttpService,
        private readonly config: ConfigService,
    ) {
        this._token = this.config.get<string>('TEST_PRIVATE_KEY_MONOBANK')
    };

    async invoice(): Promise<IInvoiceResponse> {
        const params: IInvoiceParams = {
            amount: 300,
            ccy: 980,
            merchantPaymInfo: {
                destination: "Ваш товар",
                comment: "Ваш товар",
                basketOrder: [
                    {
                        name: 'Бомба',
                        qty: 1,
                        sum: 1000,
                        unit: "шт.",
                        icon: "https://res.cloudinary.com/dn7gjjo2z/image/upload/v1733225750/images/1617693206686_Priroda_bzs15d.jpg",
                        code: "d21da1c47f3c45fca10a10c32518bdeb",
                    },
                    {
                        name: 'Бомба',
                        qty: 1,
                        sum: 1000,
                        unit: "шт.",
                        icon: "https://res.cloudinary.com/dn7gjjo2z/image/upload/v1733225750/images/1617693206686_Priroda_bzs15d.jpg",
                        code: "d21da1c47f3c45fca10a10c32518bdeb",
                    },
                ],
            },
            redirectUrl: `http://localhost:${this.config.get<number>('PORT')}`,
            webHookUrl: `http://localhost:${this.config.get<number>('PORT')}`,
            paymentType: "debit",
        };

        const response = await this.http.post<IInvoiceResponse>(`${this.baseUrl}/merchant/invoice/create`, params, {
            headers: {
                "Content-Type": "application/json",
                "X-Token": this._token,
            },
        }).pipe(
            map((response) => response.data),
            catchError((error: AxiosError) => {
                this.logger.error(error?.response?.data);
                throw 'Произошла ошибка!';
            }),
        ).toPromise();

        if (!response) 
            throw new Error('Ответ от сервера не получен.');
        
        return response
    };
};