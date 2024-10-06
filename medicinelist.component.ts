import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
   medicines:Medicine[]=[];
   constructor(private medicineService:MedicineService,private router:Router){}

   ngOnInit():void{
     this.getMedicine();
 
   }
   
    getMedicine(){
       this.medicineService.getMedicine().subscribe(data=>{
         this.medicines=data;
         console.log(this.medicines);
       }) 

    }
    update(id:number){
      this.router.navigate(['update-medicine',id]);
    

    }
     delete(id:number){
      this.medicineService.deleteMedicine(id).subscribe(data=>{
        console.log(data);
        this.getMedicine();
      })
     }
}
