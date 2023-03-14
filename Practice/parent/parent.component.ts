import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  title:string = 'practice';
  objs = ["watch","book","charger"]

  addNewObject(Object:string){
    
    this.objs.push(Object);
  }
}
