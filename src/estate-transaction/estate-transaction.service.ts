import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import estate_transactions from '../assets/estate_transactions.json';

@Injectable()
export class EstateTransactionService {
    private estates = estate_transactions;
    private earliestYear = 2015;
    private latestYear = 2018;
    private kantoCodes = [8, 9, 10, 11, 12, 13, 14];
    private validTypes = [1, 2];

    findEstate(prefCode: number, year: number, type: number) {
        if (year < this.earliestYear || year > this.latestYear) throw new BadRequestException('Year must be between 2015 and 2018');

        if (!this.kantoCodes.find(prefectureCode => prefectureCode === prefCode)) throw new BadRequestException('Prefecture Code must be Kanto prefecture code');

        if (!this.validTypes.find(validType => validType === type)) throw new BadRequestException('Type must be 1 or 2');

        const estate = this.estates.find(estate => estate.prefectureCode === prefCode && estate.year === year && estate.type === type);
        if (!estate) throw new NotFoundException('Estate not found');

        return estate.data;
    }
}
