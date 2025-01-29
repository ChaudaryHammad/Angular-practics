import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { HttComponent } from './components/htt/htt.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
    {
        path:"",
        component: DataBindingComponent
    },
    {
        path:"admin",
        component:AdminComponent
    },
    {
        path:"user",
        component:UserComponent
    },
    {
        path:"ngif",
        component:NgIfComponent
    },
    {
        path:"htt",
        component:HttComponent
    },
    {
path:"todo",
component:TodoComponent
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];
