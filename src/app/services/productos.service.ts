import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) {

  }

  getAll() {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  }
  getById(id:string) {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
  }

}
