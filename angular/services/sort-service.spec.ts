import { TestBed } from '@angular/core/testing';

//
// Task 2: Write tests fof the SortService
//

describe('SortService', () => {

});

//
// Task 3: Convert the orderService parameter into a constructor dependency injection
// parameter and write a test
//

//
// Answer
//
import { OrderOption, OrderService, SortService } from './sort-service'

describe('SortService', () => {
    let orderServiceMock: jasmine.SpyObj<OrderService>;
    let sortService: SortService;

    // Option 1
    beforeEach(() => {
        orderServiceMock = jasmine.createSpyObj('OrderService', ['getCurrentOrder']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: OrderService,
                    useValue: orderServiceMock,
                }
            ]
        });

        const sortService = TestBed.inject(SortService);
    });

    // However, there is another option:
    beforeEach(() => {
        orderServiceMock = jasmine.createSpyObj('OrderService', ['getCurrentOrder']);
        const sortService = new SortService(orderServiceMock);
    })

    it('Ascending', () => {
        orderServiceMock.getOrder.and.returnValue(OrderOption.Ascending);
        expect(sortService.sort([1, 3, 2])).toEqual([1, 2, 3]);
    })

    it('Descending', () => {
        orderServiceMock.getOrder.and.returnValue(OrderOption.Descending);
        expect(sortService.sort([1, 3, 2])).toEqual([3, 2, 1]);
    })
});
