import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signup = new FormGroup({
  uname: new FormControl("Guru",[Validators.required,Validators.minLength(5)],this.usernameCheck),
  email: new FormControl("xyz@gmail.com",[Validators.required,Validators.email]),
  mobilenums: new FormArray([ new FormControl("1234567890",[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])]),
 // mobile: new FormControl("1234567890",[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
  pwd: new FormControl("123456",[Validators.required,Validators.minLength(6),this.uppercasetest]),
  })
  show(){
    console.log(this.signup.value);
  }

  addnewmobile(){
    let mobiles=this.signup.get('mobilenums') as FormArray
    mobiles.push(new FormControl("1234567890",[Validators.required,Validators.minLength(10),Validators.maxLength(12)]))

  }
  uppercasetest(data:any){
    let upper = /[A-Z]/
    if(upper.test(data.value)){
      return null
      
    }
    return {'noupper':true}
  }
  usernameCheck(un:any):Promise<any>{
   let response = new Promise(
    (resolve,reject)=>{
      let user = ["admin","user1","user2"];
      let name = un.value;
      setTimeout(()=>{
        if(user.indexOf(name)>=0){
          resolve({"duplicateusr":true})
        }else{
          resolve(null)
        }
      },2000)
    })
   return response
  }
}
