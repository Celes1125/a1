import { ProductosService } from './../../services/productos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  producto:any
  constructor (  
    private activateRoute : ActivatedRoute, 
    private productosService : ProductosService
     ) {
    const id = this.activateRoute.snapshot.paramMap.get("id")
    console.log("id: ", id)
    if(id) {
      this.getProduct(id)
    }
  }

  getProduct (id:string){
    this.productosService.getById(id)
    .subscribe( (data:any) => {
      if(data){
        this.producto=data.meals[0]
        console.log("producto: ", this.producto)
      }     

    })
    
  }



}
