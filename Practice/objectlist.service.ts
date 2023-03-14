import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectlistService {

  objectlist1:string[] = ["watch","pen","book"];
  objectlist2:string[] = ["car","engine","tyres"]
  objectlist3:string[] = ["cup","bottle","jar"]

  getobjlist1(): string[]{
    return this.objectlist1
  }
  getobjlist2(): string[]{
    return this.objectlist2
  }
  getobjlist3(): string[]{
    return this.objectlist3
  }

  constructor() { }
}
