import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerServiceService {
  username: string = '';
  constructor() { }

  saveUser(name: string) {
    this.username = name;
    console.log(this.username, name)
  }

  getUser() {
    console.log(this.username)
    return this.username;
  }
}
