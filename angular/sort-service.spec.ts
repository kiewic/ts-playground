import { TestBed } from '@angular/core/testing';

describe('SortService', () => {

});

// Answer
import { OrderOption, OrderService, SortService } from './sort-service'

describe('SortService', () => {
    let orderServiceMock: jasmine.SpyObj<OrderService>;

    beforeEach(() => {
        orderServiceMock = jasmine.createSpyObj('OrderService', ['getCurrentOrder']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: OrderService,
                    useValue: orderServiceMock,
                }
            ]
        })
    })

    it('Ascending', () => {
        const sortService = TestBed.inject(SortService);
        orderServiceMock.getCurrentOrder.and.returnValue(OrderOption.Ascending);
        expect(sortService.sort([1, 3, 2])).toEqual([1, 2, 3]);
    })

    it('Ascending', () => {
        const sortService = TestBed.inject(SortService);
        orderServiceMock.getCurrentOrder.and.returnValue(OrderOption.Descending);
        expect(sortService.sort([1, 3, 2])).toEqual([3, 2, 1]);
    })
});
