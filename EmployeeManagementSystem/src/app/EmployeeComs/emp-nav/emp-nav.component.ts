import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Service/employee.service';

@Component({
  selector: 'app-emp-nav',
  templateUrl: './emp-nav.component.html',
  styleUrls: ['./emp-nav.component.css']
})
export class EmpNavComponent implements OnInit {

  constructor(private empServ : EmployeeService) { }

  ngOnInit(): void {
  }

  addEmp(){
    this.empServ.addEmp = true;
    this.empServ.viewEmp = false;
    this.empServ.addFamily = false;
  }

  viewEmp(){
    this.empServ.addEmp = false;
    this.empServ.viewEmp = true;
    this.empServ.addFamily = false;
  }

  addFamily(){
    this.empServ.addEmp = false;
    this.empServ.viewEmp = false;
    this.empServ.addFamily = true;
  }

}
