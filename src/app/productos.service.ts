import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  constructor() {
  }
  
    getAll(){
      return [
        {name:"motorola", price: "56"}, 
        {name:"ephone", price: "56"}, 
        {name: "xiaomi", price: "56"}
      ]
    }
   
}
