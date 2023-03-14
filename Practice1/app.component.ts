import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeAngular';
  newValue = "True";
  objects = ["pen","book","lap"]


  sample(){
    alert("Hello");
  }
  addObject(objectElement:string){
    this.objects.push(objectElement);
  }
  clearInput(){
    let input = <HTMLInputElement>document.getElementById("object-input");
    input.value = '';
  }
}
