import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { spaceValidator } from './spaceValidator';
import { EmployeeService } from '../../Service/employee.service';
import { JobService } from '../../Service/job.service';
import { DepartmentService } from '../../Service/department.service';
import { Department } from '../../Models/Department';
import { Job } from 'src/app/Models/Job';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  
  constructor(private empServ : EmployeeService, private jobServ : JobService, private depServ : DepartmentService) {
    this.depServ.getDepartments().subscribe(
      response => {this.departments = response; console.log(response)}
    )
    this.jobServ.getJobs().subscribe(
      response => {this.jobs = response; console.log(response)}
    )
   }

  departments : Department[] ;
  jobs : Job[];

  ngOnInit(): void {
  }

  form = new FormGroup({
    "employeeId" : new FormControl("",[Validators.required, Validators.nullValidator, Validators.minLength(5), spaceValidator.cannotContainSpaces]),
    "firstName" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "lastName" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "email" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "phoneNumber" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "salary" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "department" : new FormControl("",[Validators.required]),
    "job" : new FormControl("",[Validators.required]),
    "supervisor" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  register(){
    console.log(this.form.value)
   this.empServ.addEmployees(this.form.value)
   this.empServ.addEmp = false;
   this.empServ.viewEmp = true;
  }

  getEmployeeId(){
    return this.form.get('employeeId')
  }

  getFirstName(){
    return this.form.get('firstName')
  }

  async isEmployeeIdUniqe(){
    if(this.getEmployeeId().value.length > 0 && !this.getEmployeeId().errors){
      let status = await this.empServ.checkUniqId(this.getEmployeeId().value).toPromise()
      this.getEmployeeId().setErrors(status? {notUnique : true} : null)  
    }
  }

}
