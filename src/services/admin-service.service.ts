import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Admin } from 'src/model/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  nouvadmin:any=new Admin();
  constructor(private http: HttpClient) { }



  /*public addAdmin(admin):Observable<Admin>{
    console.log(admin);
    return this.http.post<Admin>(this.host+"/addadmin",admin);
    
  }*/
  addAdmin(newAdmin:Admin){
    //console.warn(JSON.stringify(newAdmin));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newAdmin);
    return  this.http.post<any>('http://127.0.0.1:8092/spring/api/addadmin',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });
 
 
  }
}