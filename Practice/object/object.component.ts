import { Component, Input,Output,EventEmitter } from '@angular/core';
import { ObjectlistService } from '../objectlist.service';
import { HeadingComponent } from '../modules/heading/heading.component'

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
  providers: [ObjectlistService]
})
export class ObjectComponent {
  @Input() objs = ["hell"];
  @Output() newObj = new EventEmitter<string>();

  addNewObject(Object:string){
    
    this.objs.push(Object);
  }

  recievedObj1: string[] = [];
  recievedObj2: string[] = [];
  recievedObj3: string[] = [];

  addObj(value:string){
    this.newObj.emit(value);
  }
  getobjlistinfo1(){
    this.recievedObj1 = this.objlist.getobjlist1()
  }
  getobjlistinfo2(){
    this.recievedObj2 = this.objlist.getobjlist2()
  }
  getobjlistinfo3(){
    this.recievedObj3 = this.objlist.getobjlist3()
  }
  constructor(private objlist: ObjectlistService){

  }
}
