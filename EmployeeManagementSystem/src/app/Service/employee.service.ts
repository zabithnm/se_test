import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { HttpClient } from '@angular/common/http';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public viewEmp : boolean = true;
  public addEmp : boolean = false;
  public addFamily : boolean = false;
  private url : string = "http://localhost:8080/employee";

  constructor(private http : HttpClient) { }

  public addEmployees(employee : Employee) : void{
    this.http.post(this.url, employee).subscribe(
      Response => console.log(Response),
      Error => console.log(Error)
    )
  }

  public getEmployees() : Subscribable<Employee[]>{
    return this.http.get(this.url)
  }

  public checkUniqId(id : number){
    return this.http.patch(this.url,{id : id})
  }

  public deleteEmployee(employee : Employee){
    return this.http.delete(this.url+"/"+employee.employeeId)
  }
}
