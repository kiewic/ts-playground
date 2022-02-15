//
// Task 4
//
import { Component } from '@angular/core';

@Component({ templateUrl: './list.component.html' })
export class ListComponent {
    items: string[] = ['foo', 'bar', 'baz'];
    filteredItems: string[];

    protected performFilter(filter: string): void {
        this.filteredItems = this.items.filter(
            (item: string) => item.indexOf(filter) !== -1);
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
