import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css']
})
export class NewoneComponent {
  @Input() show = "false";
  @Output() newObject = new EventEmitter<string>();

  addnewObject(value:string){
    this.newObject.emit(value);
  }
  
}
