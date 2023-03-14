import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  addUser(body:any){
    const postheaders = new HttpHeaders({
      'authenticationToken': 'testing2323'
    });
    const postparams = new HttpParams().set('userRole','admin');

    return this.http.post('https://jsonplaceholder.typicode.com/posts',body,{ headers: postheaders, params: postparams});
  }
  getUser(){
    /*
    const getheaders = new HttpHeaders({
      'content-type':'application/json',
      'authenticationToken': '1234545'
    });
    */
    const postparams = new HttpParams().set('pageNum','10').set('pageSize','100');

    return this.http.get('https://jsonplaceholder.typicode.com/posts',{  params: postparams});
  }
  updateUser(body:any){
    const putheaders = new HttpHeaders({
      'name': 'Angular',
      'content-type':'application/json',
      'userId': 'testinguser'
    });
    const putparams = new HttpParams().set('userId','testinguser');

    return this.http.put('https://jsonplaceholder.typicode.com/posts/1',body,{ headers: putheaders, params: putparams});

  }

  deleteUser(id:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id)
  }
  updatedData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
