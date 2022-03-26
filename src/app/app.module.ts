import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdmineComponent } from './admine/admine.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { AccuielComponent } from './accueil/accuiel.component';
import { ModifierParieurComponent } from './modifier-parieur/modifier-parieur.component';
import { SportsComponent } from './sports/sports.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CompteComponent,
    AjouterComponent,
    AdmineComponent,
    ParieursComponent,
    AccuielComponent,
    ModifierParieurComponent,
    SportsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{

}
