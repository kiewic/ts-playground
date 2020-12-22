import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule { }

////////////

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ListRoutingModule
    ],
    declarations: [ListComponent]
})
export class ListModule { }
