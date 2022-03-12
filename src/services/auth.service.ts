import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  parrieur: Parieur[];
  verif:Boolean;
public loggedUser:any;
public isloggedIn: boolean = false;

  
 
  
  constructor(private httpclient:HttpClient,private router:Router) { 
      this.httpclient.get("http://localhost:8092/spring/api/par").subscribe(
  resp=>{
    this.parrieur=Object.values(resp);
   
  }
  )
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
       localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }
    
    SignIn(user :Parieur):Boolean{
      let validUser: Boolean = false;
      this.parrieur.forEach((curUser) => {
      if(user.email=== curUser.email && user.password==curUser.password) {
      validUser = true;
      this.loggedUser = curUser.email;
      this.loggedUser = curUser.password;
      this.isloggedIn = true;
      
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
      });
      return validUser;
      }
}
