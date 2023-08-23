import { Component } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  productos:any = []

  usuarios = [
    {name:"Celeste", role: "mamá"},
    {name:"Guillermo", role: "papá"},
    {name:"Antonio", role: "hijo"}  
  ]
  constructor ( private productosService : ProductosService ) {

    this.productos = productosService.getAll()


  }

    
}
