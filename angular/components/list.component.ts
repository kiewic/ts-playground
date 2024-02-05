//
// Task 4
// list.component.ts
//
import { Component } from '@angular/core';

@Component({ templateUrl: './list.component.html' })
export class ListComponent {
    items: string[];

    protected performFilter(filter: string): void {
        this.items = this.queryItems().filter(
            (item: string) => item.indexOf(filter) !== -1
        );
    }

    protected queryItems(): string[] {
        return ['foo', 'bar', 'baz'];
    }
}

//
// Solution
//
@Component({ templateUrl: './final-list.component.html' })
export class FinalListComponent extends ListComponent {
    listFilter: string;

    onFilterChange(filter: string): void {
        this.listFilter = filter;
        this.performFilter(filter);
    }
}
