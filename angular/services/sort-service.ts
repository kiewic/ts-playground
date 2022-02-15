//
// Task 1
//
export enum OrderOption {
    Ascending,
    Descending,
}

export interface IOrderService {
    getOrder(): OrderOption;
}

export interface ISortService {
    sort(numbers: number[], orderService: IOrderService): number[];
}

//
// Task expected output
//
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
    public getOrder(): OrderOption {
        // ...
        return;
    }
}

@Injectable({ providedIn: 'root' })
export class SortService {
    constructor (private readonly order: OrderService) {
    }

    sort(numbers: number[]): number[] {
        const order = this.order.getOrder();
        numbers.sort().reverse();
        return numbers;
    }
}
