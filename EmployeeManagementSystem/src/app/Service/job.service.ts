import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../Models/Job';
import { Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  public viewJob : boolean = true;
  public addJob: boolean = false;
  private url : string = "http://localhost:8080/job";

  constructor(private http : HttpClient) { }

  public addJobs(job : Job) : void{
    this.http.post(this.url, job).subscribe(
      Response => console.log(Response),
      Error => console.log(Error)
    )
  }

  public getJobs() : Subscribable<Job[]>{
    return this.http.get(this.url)
  }

  public checkUniqId(id : number){
    return this.http.patch(this.url,{id : id})
  }

  public deleteJob(job : Job){
    return this.http.delete(this.url+"/"+job.jobId)
  }
}
