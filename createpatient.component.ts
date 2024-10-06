import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrl: './createpatient.component.css'
})
export class CreatepatientComponent {
   patient:Patient=new Patient();
    
  constructor(private patientService:PatientService,private router:Router  ){

    }
     savePatient(){
      this.patientService.createPatient(this.patient).subscribe(data=>{
         console.log(data)
         console.log(this.patient);
         this.gotoPatientlist(); 
      })

     }
     onSubmit(){
       this.savePatient();
     }
      gotoPatientlist(){
        this.router.navigate(['/docdash']);
      }
   
}
