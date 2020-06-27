import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Service/job.service';

@Component({
  selector: 'app-nav-job',
  templateUrl: './nav-job.component.html',
  styleUrls: ['./nav-job.component.css']
})
export class NavJobComponent implements OnInit {

  constructor(private jobServ : JobService) { }

  ngOnInit(): void {
  }

  addJob(){
    this.jobServ.addJob = true;
    this.jobServ.viewJob = false;
  }

  viewJob(){
    this.jobServ.addJob = false;
    this.jobServ.viewJob = true;
  }
}
