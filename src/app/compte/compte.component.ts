import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  parieur = new Parieur ();
  erreur=0;
  constructor(private AuthService:AuthService,
    private router: Router){}
  
  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
  
  let isValidUser: Boolean = this.AuthService.SignIn(this.parieur);
 if (isValidUser)
 this.router.navigate(['/acceuil']);
 else
 alert('Login ou mot de passe incorrecte!');
 }
}
