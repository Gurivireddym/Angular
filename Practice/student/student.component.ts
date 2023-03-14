import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

constructor(private fb:FormBuilder){}
  
sform=this.fb.group({
  sname: this.fb.control(null,Validators.required),
  clgname:this.fb.control(null,Validators.required),
  address:[]
})

}

