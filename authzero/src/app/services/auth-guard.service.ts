import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.auth.isAuthenticated()){
      console.log("paso el activated")
      return true;
    }
    return false;
  }
}
