import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { spaceValidator } from 'src/app/EmployeeComs/add-emp/spaceValidator';
import { JobService } from '../../Service/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private jobServ : JobService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "jobId" : new FormControl("",[Validators.required, Validators.nullValidator, Validators.minLength(3), spaceValidator.cannotContainSpaces]),
    "jobName" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  register(){
   this.jobServ.addJobs( this.form.value)
  }

  getJobId(){
    return this.form.get('jobId')
  }

  getJobName(){
    return this.form.get('jobName')
  }

  async isJobIdUniqe(){
    if(this.getJobId().value.length > 0 && !this.getJobId().errors){
      let status = await this.jobServ.checkUniqId(this.getJobId().value).toPromise()
      this.getJobId().setErrors(status? {notUnique : true} : null)  
    }
  }

}
