import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';

@Component({
  selector: 'app-parieurs',
  templateUrl: './parieurs.component.html',
  styleUrls: ['./parieurs.component.css']
})
export class ParieursComponent implements OnInit {

  parieur:any;
  ajout:boolean=false;
  nouvparieur=new Parieur();
  id: number;
  


  constructor(private serviceEmp: ParieurserService,
    private route:Router) { }

  ngOnInit(): void {
    this.serviceEmp.getAllParieur().subscribe(data=>{
      this.parieur=data;
  } 
  
  )
}
  ajouterparieur(){
    this.ajout=true;
    console.log(this.ajout);
  }
  annulerajout(){
    this.ajout=false;
  }
 

 Updateparieur(id: number){
  this.route.navigate(['update_parieur',id]) ;

 }
 clickMethod(id, name) {
  if(confirm("Are you sure to delete "+name)) {
    this.serviceEmp.deleteParieur(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}


}