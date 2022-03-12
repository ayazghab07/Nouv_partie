import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  nouvparieur=new Parieur();
  
  message: string | undefined;
   constructor(private httpClient:HttpClient,private ParieurserService: ParieurserService,private router:Router) { }
   confirmationString:String ="New admin has been added";  
    isAdded:boolean=false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvparieur);
 
     this.ParieurserService.addParieur(this.nouvparieur);  
    // document.write("l admin est ajouté"); 
    
    window.alert("Parieur est ajouté !");
 this.router.navigate(['acceuil']);
    isAdded:true;
 
        
        }
       
}