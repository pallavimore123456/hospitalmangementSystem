import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {
  patient:Patient=new Patient();
  id:number=0;
  constructor(private patientService:PatientService,private route:ActivatedRoute){}
   
ngOnInit():void{
  this.id=this.route.snapshot.params['id'];
  this.patientService.getPatientById(this.id).subscribe(data=>{
  this.patient=data;

  })
     
  

}


}


