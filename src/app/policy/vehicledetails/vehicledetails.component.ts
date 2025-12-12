
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';


export class vehicledetails {
    registrationYear!: number;
    manufactureYear!: number;
    vehicleUsage!:string;
    vehicleType!:string;
    registrationNumber!:number;
    passengerCount!:number;
    vehicleColor!:string;
    vehicleValue!:number;
    chassisNumber!:number;
    vehicleMake!:string;
    vehicleModel!:string;
    tppdAmount!:number;
    cubicCapacity!:number;
    buyExcess!:number;
  }


@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss']
})
export class VehicledetailsComponent {
  
form :vehicledetails;
formList = [];

// formList: any;


createNewVehicleForm(){
  return{
          registrationYear: '',
          manufactureYear: '',
           vehicleUsage:'',
           vehicleType:'',
           registrationNumber:'',
           passengerCount:'',
           vehicleColor:'',
           vehicleValue:'',
           chassisNumber:'',
           vehicleMake:'',
           vehicleModel:'',
           tppdAmount:'',
           cubicCapacity:'',
           buyExcess:''
  }
}

constructor(){
  this.form = new vehicledetails()
}

  onSubmit(form:NgForm){
    console.log("hi");
  }

addForm(form:vehicledetails){
  this.formList.push();
  console.log("hello")
}

removeItem(){
  console.log("hey",this.form)
}

}








  

// let forms: vehicledetails[] =[

//     {
//     }
// ]














  //   this.createNewForm() 
  // ];


//    createNewForm() {

//     return{
//       
//     };
//   }

//   addForm(){
//     this.form.push(this.createNewForm());
//   }

//   submitForms(){
//     console.log(this.form)
//   }
//   }

// removeForm(){

// }

