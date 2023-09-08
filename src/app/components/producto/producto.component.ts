import { Component, Input } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';


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
  isLogin:boolean=false

  constructor (
    private _usuarios: UsuariosService
  ){
    this._usuarios.isAuthenticate().subscribe(
      login => {
        return this.isLogin = login
      }
    )
  }



  

}
