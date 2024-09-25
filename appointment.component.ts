import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments:Appointment[]=[];
 constructor( private AppointmentService:AppointmentService){}
     
 ngOnInit():void{
   this.getAppointmentList();

  }
    getAppointmentList(){
      this.AppointmentService.getAppointmentList().subscribe(data=>{
         this.appointments=data;
         console.log(this.appointments);
         
      })
       

    }
    delete(id:number){
      this.AppointmentService.deleteAppointment(id).subscribe(data=>{
        console.log(data);
        this.getAppointmentList();
      })
      
       
    }
      
       
     
    


  }

     

