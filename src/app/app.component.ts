import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  cantidad = 0
  classCSScantidad = ""
  productos = [
    "amarillo", "rojo", "azul"
  ]
  usuarios = [
    {name:"Celeste", role: "mamá"},
    {name:"Guillermo", role: "papá"},
    {name:"Antonio", role: "hijo"}  
  ]

  sumar(){
    this.cantidad++
    if (this.cantidad > 0) {
      this.classCSScantidad= "positivo"
    }else{
      this.classCSScantidad="negativo"
    }   
  }
  restar(){
    this.cantidad-- 
    if (this.cantidad > 0) {
      this.classCSScantidad= "positivo"
    }else{
      this.classCSScantidad="negativo"
    }    
  }
}
