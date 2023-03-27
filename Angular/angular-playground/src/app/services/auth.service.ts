import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn = false

  constructor() { }

  logInUser(){
    this.userLoggedIn = true
  }

  logOutUser(){
    this.userLoggedIn = false
  }
}
