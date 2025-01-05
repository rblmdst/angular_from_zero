import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

const API_BASE_URL = 'http://localhost:3000/employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  http = inject(HttpClient);

  getEmployee(id: string) {
    return this.http.get<Employee>(`${API_BASE_URL}/${id}`);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${API_BASE_URL}/${id}`);
  }

  getEmployees() {
    return this.http.get<Employee[]>(API_BASE_URL);
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(API_BASE_URL, employee);
  }

  editEmployee(employee: Employee) {}
}
