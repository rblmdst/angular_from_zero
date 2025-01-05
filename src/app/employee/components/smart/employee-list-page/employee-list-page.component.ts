import { Component, inject } from '@angular/core';
import { EmployeeListComponent } from '../../ui/employee-list/employee-list.component';
import { EmployeeComponent } from '../../ui/employee/employee.component';
import { Router, RouterLink } from '@angular/router';
import { concatMap } from 'rxjs';
import { Employee } from '../../../models/employee.model';
import { EmployeeApiService } from '../../../services/employee-api.service';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeListComponent, EmployeeComponent, RouterLink],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss',
})
export class EmployeeListPageComponent {
  employees: Employee[] = [];

  currentEmployee: null | Employee = null;

  // employeeService = inject(EmployeeService);
  employeeApiService = inject(EmployeeApiService);
  router = inject(Router);

  constructor() {
    this.employeeApiService.getEmployees().subscribe(
      (employee) => {
        this.employees = employee;
      },
      (err) => {
        this.employees = [];
      }
    );
    // this.employees = this.employeeService.getEmployees();
  }

  showDetails(employeeId: string) {
    this.currentEmployee =
      this.employees.find((employee) => employee._id === employeeId) || null;
    // this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }
  onEdit(employeeId: string) {
    this.router.navigate(['employees/edit', employeeId]);
  }
  onDelete(employeeId: string) {
    this.currentEmployee = null;
    this.employeeApiService
      .deleteEmployee(employeeId)
      .pipe(concatMap(() => this.employeeApiService.getEmployees()))
      .subscribe((employees) => {
        this.employees = employees;
      });

    /* this.employeeService.deleteEmployee(employeeId);
    this.employees = this.employeeService.getEmployees(); */
  }
}
