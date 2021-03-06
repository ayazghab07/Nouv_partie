import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParieurserService {
  nouvParieur:any=new Parieur();

  constructor(private http: HttpClient) { }

  
  

  addParieur(newParieur:Parieur){
    //console.warn(JSON.stringify(newAdmin));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newParieur);
    return  this.http.post<any>('http://127.0.0.1:8046/spring/api/parieur',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });
 
 
  }

  getAllParieur():Observable<any>{
    return this.http.get("http://localhost:8046/spring/api/par");

  }
  public onDelete(id): Observable<any> {
    console.log(id);
    return this.http.delete<Parieur>("http://127.0.0.1:8046/spring/api/delete/"+id);
    
  }
 
  public Updateparieur(id: number): Observable<Parieur> {
  
    return this.http.get<Parieur>("http://127.0.0.1:8046/spring/api/par/"+id);
  }
  public Updatepar2(id: number, parieur: Parieur): Observable<Parieur> {
    
    return this.http.put<Parieur>("http://127.0.0.1:8046/spring/api/par/"+id, parieur);
  }
  
}