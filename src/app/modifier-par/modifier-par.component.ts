import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ParieurserService } from 'src/services/parieurser.service';
import { Parieur } from 'src/model/parieur';

@Component({
  selector: 'app-modifier-par',
  templateUrl: './modifier-par.component.html',
  styleUrls: ['./modifier-par.component.css']
})
export class ModifierParComponent implements OnInit {
  nouvparieur=new Parieur();
  constructor(private httpClient:HttpClient,private ParieurserService: ParieurserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.ParieurserService.Updateparieur2(.subscribe(data=>{
      this.router.navigate(['listemployee']);
    })

  }

}
