import { FormStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { of } from 'rxjs';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {
  valid=false;
  bmi=0;
  stage='';
    bmiform = new FormGroup({
    age: new FormControl<number>(1,[Validators.required, Validators.minLength(1), Validators.maxLength(3),this.agecheck] ),
    gender: new FormControl('', [Validators.required]),
    hgt: new FormControl<number>(50,{nonNullable:true,validators:[Validators.required]}),
    wgt: new FormControl<number>(4,{nonNullable:true,validators:[Validators.required]})
  })
  
  agecheck(val: AbstractControl) {
    if (val.value<=100) {
      return ({age: false});
    }
    return ({age: true});
  }
  show(){
    console.log(this.bmiform.value)
  }
  bmicalculation(){
       let result = (Number(this.bmiform.value.wgt)/Number(this.bmiform.value.hgt)/Number(this.bmiform.value.hgt))*10000;
       this.bmi = Math.round(result);
       if(this.bmiform.value.wgt==0 || this.bmiform.value.hgt ==0 ){
        this.stage='Invalid Data';
       }
       else if(this.bmi<19){
          this.stage='Underweight';
       }else if(this.bmi>19&&this.bmi<25){
          this.stage='Normal Weight';
       }else if(this.bmi>25&&this.bmi<30){
          this.stage='Over Weight';
       }else{
          this.stage='Obesity';
       }
      console.log(this.bmiform)
    }
      
  isvalid(){
    this.valid=false;
    if(this.bmiform.valid){
      this.valid=true;
    }else{
      return;
    }
  }
  //resetForm(){
    //this.bmiform.reset();
  //}
}
