import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerServiceService {
  username: string = '';
  constructor() { }

  saveUser(name: string) {
    this.username = name;
  }

  getUser() {
    return this.username;
  }
}
