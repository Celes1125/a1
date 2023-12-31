import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  authenticationState = new BehaviorSubject((localStorage.getItem("login")?true:false))

  constructor() { }

  authenticate () {
    // al loguearte cambia el estado a true
    this.authenticationState.next(true)
    localStorage.setItem("login", "true")

  }

  isAuthenticate():Observable<boolean>{
    // este es el observable, al cual podemos subscribir
    return this.authenticationState
  }
    
  isAuthenticated () {
    // este devuelve el valor del observable, si está en false o en true
    this.authenticationState.value
  }

  logout () {
    // al desloguearte cambia el estado a false
    this.authenticationState.next(false)
    localStorage.removeItem("login")

  }
}
