import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public router:Router) { }
  canActivate():boolean{
    if(localStorage.getItem('user')==null){
      alert("First You have to login")
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
