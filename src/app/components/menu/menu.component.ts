import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isLogin: boolean = false 
  constructor (
    private _usuarios:UsuariosService
  ) {
    this._usuarios.isAuthenticate().subscribe(login => { this.isLogin = login })
  }

  logout () {
    this._usuarios.logout()
  }

  

}
