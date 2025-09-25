import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { EstateTransactionService } from './estate-transaction.service';

//@Controller('estate-transaction')
@Controller('api/v1/townPlanning/estateTransaction/bar')
export class EstateTransactionController {

    constructor(private readonly estateServices: EstateTransactionService) { }

    @Get() //GET: http://localhost:3000/api/v1/townPlanning/estateTransaction/bar?prefCode=13&year=2009&type=1
    findEstate(@Query('prefCode', ParseIntPipe) prefCode: number, @Query('year', ParseIntPipe) year: number, @Query('type', ParseIntPipe) type: number) {
        return this.estateServices.findEstate(prefCode, year, type);
    }

}
