import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private routr : Router){}
  home(){
    this.routr.navigate(['home'])
  }

  employee(){
    this.routr.navigate(['employee'])
  }

  department(){
    this.routr.navigate(['department'])
  }

  jobs(){
    this.routr.navigate(['jobs'])
  }
}
