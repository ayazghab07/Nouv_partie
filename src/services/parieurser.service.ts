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
    return  this.http.post<any>('http://127.0.0.1:8092/spring/api/addparieur',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });
 
 
  }
  getAllParieur():Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/par");

  }
  deleteParieur(id:any):Observable<any>
  {
    let url='http://localhost:8092/spring/api/deletepar';
    let baseurl=url.concat(id.toString());
    return this.http.delete(baseurl);
  }
  
updateParieur(p:Parieur)
{
// console.log(p);
this.deleteParieur(p);
this.addParieur(p);
}

}