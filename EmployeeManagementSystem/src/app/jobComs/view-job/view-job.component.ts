import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Service/job.service';
import { Job } from '../../Models/Job';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  jobs : Job[];
  constructor(public jobServ : JobService) { 
    this.updateJobList()
  }

  updateJobList(){
    this.jobServ.getJobs().subscribe(
      response => this.jobs = response
    )
  }

  ngOnInit(): void {
  }

  deleteJob(job : Job){
    this.jobServ.deleteJob(job).subscribe(
      ()=>{this.updateJobList()}
    )
  }

  editJob(job : Job){
    
  }

}
