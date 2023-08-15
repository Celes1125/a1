import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  cantidad = 0
  classCSScantidad = ""

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
