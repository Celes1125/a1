import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  

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

  ngOnInit(): void {
    
  }

    
}


