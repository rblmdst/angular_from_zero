import { Component, computed, inject, input } from '@angular/core';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

import { EmployeeComponent } from '../../ui/employee/employee.component';
import { EmployeeFormComponent } from '../../ui/employee-form/employee-form.component';
import { EmployeeApiService } from '../../../services/employee-api.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-edit-page',
  imports: [EmployeeFormComponent],
  templateUrl: './employee-edit-page.component.html',
  styleUrl: './employee-edit-page.component.scss',
})
export class EmployeeEditPageComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  // employeeService = inject(EmployeeService);

  employeeApiService = inject(EmployeeApiService);

  empId = input.required<string>();
  employeeRx = rxResource<Employee, string>({
    request: () => this.empId(),
    loader: ({ request: empId }) => this.employeeApiService.getEmployee(empId),
  });

  employee = computed(() => this.employeeRx.value());

  onEditEmployee(employee: Employee) {
    // this.employeeService.editEmployee(employee);
    this.router.navigate(['/employees']);
  }
}
