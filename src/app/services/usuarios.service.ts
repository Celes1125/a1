import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  authenticationState = new BehaviorSubject(false)

  constructor() { }

  authenticate () {
    // al loguearte cambia el estado a true
    this.authenticationState.next(true)
  }

  isAuthenticate():Observable<boolean>{
    // este es el observable, al cual podemos subscribir
    return this.authenticationState
  }
    
  isAuthenticated () {
    // este devuelve el valor del observable, si está en false o en true
    this.authenticationState.value
  }
}
