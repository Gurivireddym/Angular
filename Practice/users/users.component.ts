import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users:any;
  constructor(private http:HttpClient){
  }
  ngOnInit(){
   //this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
    //(data)=>{
    //  this.users = data
  //}
  //)
    this.users=this.http.get('https://jsonplaceholder.typicode.com/users');

   
  }
}
