import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
  medicines:Medicine=new Medicine();
constructor(private medicineService:MedicineService,private router:Router){}

 saveMedicine(){
   this.medicineService.createMedicine(this.medicines).subscribe(data=>{
     console.log(data);
     this.goToMedicinelist();   
   })
 }
  onSubmit(){
    this.saveMedicine();
   
  }
  goToMedicinelist(){
    this.router.navigate(['/viewmedicine']);
    
  }

}
