import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';

@Component({
  selector: 'app-nav-dep',
  templateUrl: './nav-dep.component.html',
  styleUrls: ['./nav-dep.component.css']
})
export class NavDepComponent implements OnInit {

  constructor(private depServ : DepartmentService) { }

  ngOnInit(): void {
  }

  addDep(){
    this.depServ.addDep = true;
    this.depServ.viewDep = false;
  }

  viewDep(){
    this.depServ.addDep = false;
    this.depServ.viewDep = true;
  }
}
