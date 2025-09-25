import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction.service';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
    }).compile();

    controller = module.get<EstateTransactionController>(EstateTransactionController);
  });

  let expectedResult1 = {
    "result": {
      "prefectureCode": "8",
      "prefectureName": "茨城県",
      "type": "1",
      "years": [
        {
          "year": 2015,
          "value": 22871
        }
      ]
    }
  };

  describe('root', () => {
    it('Function result should equal expectedResult1', () => {
      expect(controller.findEstate(8, 2015, 1)).toBe(expectedResult1);
    });
  });

  let expectedResult2 = {
    "message": "Type must be 1 or 2",
    "error": "Bad Request",
    "statusCode": 400
  };

  describe('root', () => {
    it('Function result should equal expectedResult2', () => {
      expect(controller.findEstate(8, 2015, 3)).toBe(expectedResult2);
    });
  });

  let expectedResult3 = {
    "message": "Year must be between 2015 and 2018",
    "error": "Bad Request",
    "statusCode": 400
  };

  describe('root', () => {
    it('Function result should equal expectedResult3', () => {
      expect(controller.findEstate(8, 2014, 1)).toBe(expectedResult3);
    });
  });

  let expectedResult4 = {
    "message": "Prefecture Code must be Kanto prefecture code",
    "error": "Bad Request",
    "statusCode": 400
  };

  describe('root', () => {
    it('Function result should equal expectedResult4', () => {
      expect(controller.findEstate(1, 2015, 1)).toBe(expectedResult4);
    });
  });
});
