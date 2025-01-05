import { Department } from './department.model';
import { Level } from './level.model';

export interface Employee {
  _id: string;
  name: string;
  department: Department;
  level: Level;
}
