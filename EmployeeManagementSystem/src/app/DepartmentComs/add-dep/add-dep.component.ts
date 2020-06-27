import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { spaceValidator } from 'src/app/EmployeeComs/add-emp/spaceValidator';
import { DepartmentService } from '../../Service/department.service';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(private depServ : DepartmentService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "departmentId" : new FormControl("",[Validators.required, Validators.nullValidator, Validators.minLength(5), spaceValidator.cannotContainSpaces]),
    "departmentName" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  register(){
   this.depServ.addDepartments(this.form.value);
  }

  getDepartmentId(){
    return this.form.get('departmentId')
  }

  getDepartmentName(){
    return this.form.get('departmentName')
  }

  async isDepartmentIdUniqe(){
    if(this.getDepartmentId().value.length > 0 && !this.getDepartmentId().errors){
      let status = await this.depServ.checkUniqId(this.getDepartmentId().value).toPromise()
      this.getDepartmentId().setErrors(status? {notUnique : true} : null)  
    }
  }

}
