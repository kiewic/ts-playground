import { Component } from '@angular/core';

@Component({ templateUrl: './list.component.html' })
export class ListComponent {
    items: string[];
    filteredItems: string[];

    private performFilter(filter: string): void {
        this.filteredItems = this.items.filter(
            (item: string) => item.indexOf(filter) !== -1);
    }
}

/***

<input type="text"
    [ngModel]='listFilter'
    (ngModelChange)='onFilterChange($event)' />

<span *ngIf="items?.length == false">No results available</span>

<ul *ngFor="let item of filteredItems">
    <li>{{item}}</li>
</ul>

***/

export class List2Component {
    listFilter: string;

    onFilterChange(filter: string): void {
        this.listFilter = filter;
        this.performFilter(filter);
    }
}
