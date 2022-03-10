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
  nouvadmin = new Admin();
  registerForm: FormGroup;
  message: string | undefined;
   constructor(private httpClient:HttpClient,private adminService: AdminServiceService,private router:Router) { }
   confirmationString:String ="New admin has been added";  
    isAdded:boolean=false;
    submitted = false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvadmin);
 
     this.adminService.addAdmin(this.nouvadmin);  
    // document.write("l admin est ajouté"); 
    
    window.alert("L admin est ajouté !");
 this.router.navigate(['parieurs']);
    isAdded:true;
 
        

        }
        
       
}


