import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../Service/department.service';
import { Department } from '../../Models/Department';

@Component({
  selector: 'app-view-dep',
  templateUrl: './view-dep.component.html',
  styleUrls: ['./view-dep.component.css']
})
export class ViewDepComponent implements OnInit {

  departments : Department [];
  constructor(private depServ : DepartmentService) {
    this.updateDepartmentList()
   }
  ngOnInit(): void {
  }

  updateDepartmentList(){
    this.depServ.getDepartments().subscribe(
      response => this.departments = response
    )
  }

  deleteDepartment(department : Department){
    this.depServ.deleteDepartment(department).subscribe(
      ()=>{this.updateDepartmentList()}
    )  
  }

}
