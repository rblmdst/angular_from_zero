import { Routes } from '@angular/router';
import { EmployeeListPageComponent } from './employee/components/smart/employee-list-page/employee-list-page.component';
import { AddEmployeePageComponent } from './employee/components/smart/add-employee-page/add-employee-page.component';
import { EmployeeEditPageComponent } from './employee/components/smart/employee-edit-page/employee-edit-page.component';
import { RegisterPageComponent } from './authentification/components/smart/register-page/register-page.component';
import { LoginPageComponent } from './authentification/components/smart/login-page/login-page.component';
import { authGuard } from './authentification/guards/auth.guard';
import { nonAuthGuard } from './authentification/guards/non-auth.guard';

export const routes: Routes = [
  {
    path: 'register',
    canMatch: [nonAuthGuard],
    component: RegisterPageComponent,
  },
  { path: 'login', canMatch: [nonAuthGuard], component: LoginPageComponent },
  {
    path: 'employees',
    canMatch: [authGuard],
    children: [
      {
        path: '',
        component: EmployeeListPageComponent,
      },
      { path: 'new', component: AddEmployeePageComponent },
      { path: 'edit/:empId', component: EmployeeEditPageComponent },
    ],
  },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
