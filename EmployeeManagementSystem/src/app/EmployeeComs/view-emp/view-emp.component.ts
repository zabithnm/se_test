import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../Models/Employee';
import { Router } from '@angular/router';
import { FamilyDetailsService } from '../../Service/family-details.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  employees : Employee[];
  constructor(private empServ : EmployeeService, private router : Router, private famServ : FamilyDetailsService) {
    this.empServ.getEmployees().subscribe(
      response => this.employees = response
    )
   }

  ngOnInit(): void {
  }

  view(employee : Employee){
    this.famServ.employee = employee
    this.router.navigate(['viewUser'])
  }

  deleteEmployee(employee : Employee){
    this.empServ.deleteEmployee(employee)
  }

}
