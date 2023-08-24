import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor( private http:HttpClient) {    
    
  }

    getAll(){
      return this.http.get("https://jsonplaceholder.typicode.com/posts")
      
    }

    /*
    con promise, que está deprecado
    getAll(){
      return this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise()
      
    }*/
     
   
}
