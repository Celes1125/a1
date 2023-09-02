import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input()
  data:any
  @Input()
  verDetalle:boolean=true

  

}
