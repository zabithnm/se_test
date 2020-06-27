import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobsComponent } from './jobs/jobs.component';
import { AddEmpComponent } from './EmployeeComs/add-emp/add-emp.component';
import { ViewEmpComponent } from './EmployeeComs/view-emp/view-emp.component';
import { EmpNavComponent } from './EmployeeComs/emp-nav/emp-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDepComponent } from './DepartmentComs/add-dep/add-dep.component';
import { NavDepComponent } from './DepartmentComs/nav-dep/nav-dep.component';
import { ViewDepComponent } from './DepartmentComs/view-dep/view-dep.component';
import { AddJobComponent } from './jobComs/add-job/add-job.component';
import { NavJobComponent } from './jobComs/nav-job/nav-job.component';
import { ViewJobComponent } from './jobComs/view-job/view-job.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFamilyComponent } from './EmployeeComs/add-family/add-family.component';
import { ViewFamilyComponent } from './EmployeeComs/view-family/view-family.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentComponent,
    EmployeeComponent,
    JobsComponent,
    AddEmpComponent,
    ViewEmpComponent,
    EmpNavComponent,
    AddDepComponent,
    NavDepComponent,
    ViewDepComponent,
    AddJobComponent,
    NavJobComponent,
    ViewJobComponent,
    AddFamilyComponent,
    ViewFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
