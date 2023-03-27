import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private _auth:AuthService, private router:Router){

    }

    canActivate():any{
        if(this._auth.userLoggedIn){
            return true;
        }else{
            this.router.navigate(['/login']);
        }
    }
}