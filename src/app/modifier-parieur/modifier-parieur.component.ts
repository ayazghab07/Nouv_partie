import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';

@Component({
  selector: 'app-modifier-parieur',
  templateUrl: './modifier-parieur.component.html',
  styleUrls: ['./modifier-parieur.component.css']
})
export class ModifierParieurComponent implements OnInit {

  public nouvpar=new Parieur;
  id:number;

  constructor(private servicepar:ParieurserService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicepar.Updateparieur(this.id).subscribe(data=>{
      this.nouvpar=data;
    })
  }
  onSubmit(){
    this.servicepar.Updatepar2(this.id, this.nouvpar).subscribe(data=>{
      this.router.navigate(['parieurs']);
    })

  }
}
