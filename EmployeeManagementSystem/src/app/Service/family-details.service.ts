import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FamilyDetails } from '../Models/FamilyDetails';
import { Subscribable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsService {

  public viewFam : boolean = true;
  public addFam : boolean = false;

  public employee : Employee;
  
  private url : string = "http://localhost:8080/familyDetails";

  constructor(private http : HttpClient) { }

  public addFamilyDetails(familyDetails : FamilyDetails) : void{
    this.http.post(this.url, familyDetails).subscribe(
      Response => console.log(Response),
      Error => console.log(Error)
    )
  }

  public getFamilyDetails(id : number) : Subscribable<FamilyDetails[]>{
    return this.http.get(this.url+"/"+id)
  }

  public checkUniqId(id : number){
    return this.http.patch(this.url,{id : id})
  }

  public deleteFamilyDetail(familyDetails : FamilyDetails){
    return this.http.delete(this.url+"/"+familyDetails.id)
  }
}
