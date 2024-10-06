import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
   id:number=0;
   medicines:Medicine=new Medicine();
  constructor(private medicineService:MedicineService,private route:ActivatedRoute,private router:Router){}
   
   ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
     this.medicines=data;
    })


   }
   
  onSubmit(){
  this.medicineService.updateMedicine(this.id,this.medicines).subscribe(data=>{
    console.log(data);
    console.log(this.medicines);
    this.gotoMedicine();
  })
  }
  gotoMedicine(){
  this.router.navigate(['viewmedicine']);
  }
}
