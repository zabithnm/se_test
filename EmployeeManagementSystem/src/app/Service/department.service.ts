import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../Models/Department';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public viewDep : boolean = true;
  public addDep : boolean = false;
  private url : string = "http://localhost:8080/department";

  constructor(private http : HttpClient) { }

  public addDepartments(department : Department) : void{
    this.http.post(this.url, department).subscribe(
      Response => console.log(Response),
      Error => console.log(Error)
    )
  }

  public getDepartments() : Subscribable<Department[]>{
    return this.http.get(this.url)
  }

  public checkUniqId(id : number){
    return this.http.patch(this.url,{id : id})
  }

  public deleteDepartment(department : Department){
    return this.http.delete(this.url+"/"+department.departmentId)
  }
}
