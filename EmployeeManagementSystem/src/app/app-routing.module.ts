import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobsComponent } from './jobs/jobs.component';
import { EmpNavComponent } from './EmployeeComs/emp-nav/emp-nav.component';
import { ViewEmpComponent } from './EmployeeComs/view-emp/view-emp.component';
import { ViewFamilyComponent } from './EmployeeComs/view-family/view-family.component';


const routes: Routes = [
  {path : "", pathMatch : "full", redirectTo : "home"},
  {path : "home", component : HomeComponent},
  {path : "department", component : DepartmentComponent},
  {path : "employee", component : EmployeeComponent},
  {path : "jobs", component : JobsComponent},
  {path : "viewUser", component : ViewFamilyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
