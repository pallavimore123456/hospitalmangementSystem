import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
   patients:Patient[]=[];
  constructor(private patientService: PatientService, private router:Router){}
    ngOnInit():void{
    this.getPatient();

   } 
    getPatient(){
      this.patientService.getPatientList().subscribe(data=>{
          this.patients=data;
        
      }) 
       
    }
    update(id:number){
      this.router.navigate(['update-patient',id]);
    

    }
     delete(id:number){
       this.patientService.deleteAppointment(id).subscribe(data=>{
        console.log(data);
        this.getPatient();

       })

     }
     view(id:number){
      this.router.navigate(['view-patient',id]);
     }

   

}
