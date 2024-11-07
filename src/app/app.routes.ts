import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    { path:'', redirectTo:'/auth/login', pathMatch: 'full'},
    { path:'auth/login', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path:'dashboard', component: DashboardComponent },
    { path: 'dashboard', redirectTo: 'test', pathMatch:'full' },
    { path:'test', component:TestComponent }
    // { path: 'users', component: UserListComponent },
    // { path: 'users/new', component: UserFormComponent },
    // { path: 'users/:id/edit', component: UserFormComponent},
    // { path: 'users/:id', component: UserDetailComponent }
];
