import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos: any = []
  
 
  constructor ( 
    private productosService : ProductosService,
    
    ) {    

    this.productosService.getAll().
    subscribe((data : any) => {
      console.log ("data: ", data)
      this.productos = data.meals
    
    })

}
}
