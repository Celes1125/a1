import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos:any = []
  productosPipe:any
 
  constructor ( private productosService : ProductosService ) {

    this.productosPipe = this.productosService.getAll()

    this.productosService.getAll().
    subscribe((data : any) => {
      console.log ("data: ", data)
      this.productos = data
    })

}
}
