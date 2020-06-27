import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(public depServ : DepartmentService) { }

  ngOnInit(): void {
    
  }

}
