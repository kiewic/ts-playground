//
// Step 1
//
export enum OrderOption {
    Ascending,
    Descending,
}

export interface ISortService {
    sort(numbers: number[], order: OrderOption): number[];
}

//
// Step 2
//
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class OrderService {
    public getCurrentOrder(): OrderOption {
        // ...
        return;
    }
}

@Injectable({ providedIn: 'root' })
export class SortService {
    constructor (private readonly order: OrderService) {
    }

    sort(numbers: number[]): number[] {
        const order = this.order.getCurrentOrder();
        // ...
        return numbers;
    }
}
