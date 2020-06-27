import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  employees : Employee[];
  constructor(private empServ : EmployeeService) {
    this.empServ.getEmployees().subscribe(
      response => this.employees = response
    )
   }

  ngOnInit(): void {
  }

}
