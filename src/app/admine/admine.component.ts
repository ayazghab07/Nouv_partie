import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/model/admin';
import { AdminServiceService } from 'src/services/admin-service.service';


@Component({
  selector: 'app-admine',
  templateUrl: './admine.component.html',
  styleUrls: ['./admine.component.css']
})
export class AdmineComponent implements OnInit {
  admin = new Admin ();
  erreur=0;
  
  constructor(private AdminServiceService:AdminServiceService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
  
  let isValidUser: Boolean = this.AdminServiceService.SignIn(this.admin);
 if (isValidUser)
 this.router.navigate(['/parieurs']);
 else
 alert('Login ou mot de passe incorrecte!');
 }
}


