import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeServ : EmployeeService) { }

  ngOnInit(): void {
    
  }

}
