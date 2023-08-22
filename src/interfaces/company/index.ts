import { EmployeeInterface } from 'interfaces/employee';
import { GuestInterface } from 'interfaces/guest';
import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  guest?: GuestInterface[];
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    guest?: number;
    payroll?: number;
    vacation?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
