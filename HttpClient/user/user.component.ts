import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private userservice: UserserviceService){}
  users:any;
  addUser(){
    const postdata={
      title: 'Angular',
      body:'angular description'
    }
    this.userservice.addUser(postdata).subscribe(data => {
      console.log(data);
      
    }, (err) => {
      console.log('unable to add user'+err);
    })
  }

  getUser(){
    this.userservice.getUser().subscribe(data => {
      console.log(data);
      this.users=data;
    }, (err) => {
      console.log('unable to get user'+err);
    })
  }

  updateUser(){
    const putdata={
      title: 'Angular',
      body:'GUI Technology'
    }
    this.userservice.updateUser(putdata).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log('unable to update user'+err);
    })

  }
  deleteUser(){
    this.userservice.deleteUser(1).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log('unable to delete user'+err);
    })

  }
  updatedData(){
    this.userservice.updatedData().subscribe(data => {
      this.users=data;
    },(err)=>{
      console.log('Unable to get updated data'+err);
    })
  }

}
