import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { spaceValidator } from '../add-emp/spaceValidator';
import { FamilyDetailsService } from '../../Service/family-details.service';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css']
})
export class AddFamilyComponent implements OnInit {

  employees : Employee[];
  constructor(private familyServ : FamilyDetailsService, private empServ : EmployeeService) { 
    this.empServ.getEmployees().subscribe(
      response => this.employees = response
    )
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "employee" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "name" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "occupation" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "relationship" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  register(){
    this.familyServ.addFamilyDetails(this.form.value);
  }

}
