import { Component, OnInit } from '@angular/core';
import { FamilyDetails } from '../../Models/FamilyDetails';
import { FamilyDetailsService } from '../../Service/family-details.service';
import { Employee } from '../../Models/Employee';

@Component({
  selector: 'app-view-family',
  templateUrl: './view-family.component.html',
  styleUrls: ['./view-family.component.css']
})
export class ViewFamilyComponent implements OnInit {

  employee : Employee;
  familyDetails : FamilyDetails[];

  constructor(private famServ : FamilyDetailsService) {
    this.employee = this.famServ.employee;
    this.famServ.getFamilyDetails(this.employee.employeeId).subscribe(
      response => this.familyDetails = response
    )
   }

  ngOnInit(): void {
  }

}
