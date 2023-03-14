import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  userdetails = {username: "admin", pwd: "rootroot"}
  
  constructor(){}
  validate(uname:any, pwd:any){
    //this.userdetails.find({u: uname , p:pwd});
    //const result = this.userdetails.find(({uname,pwd})=>this.userdetails.u =)
    console.log(uname,pwd);
    //const result = this.userdetails.find(({u,p})=> u === uname && p===pwd)
    //{{result}}
  }
  submit(form:any){
    console.log(form.value.username);
    console.log(form.value.pwd);
    console.log(form.value);
    console.log(this.userdetails);
    if (this.userdetails.username === form.value.username && this.userdetails.pwd === form.value.pwd){
        console.log("hello");
        alert("user login is successfull");
       }
  }
  }
 

