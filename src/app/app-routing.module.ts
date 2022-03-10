import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdmineComponent } from './admine/admine.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { AccuielComponent } from './accueil/accuiel.component';
const routes: Routes = [
  {path:'se_connecter',component:CompteComponent},
  {path:'s_inscrire',component:AjouterComponent},
  {path:'s_admine', component:AdmineComponent},
  {path:'parieurs', component:ParieursComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
