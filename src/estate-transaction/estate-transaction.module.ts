import { Module } from '@nestjs/common';
import { EstateTransactionController } from './estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction.service';

@Module({
    controllers: [EstateTransactionController],
    providers: [EstateTransactionService]
})
export class EstateTransactionModule {}
