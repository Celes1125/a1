import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm:FormGroup
  

  constructor (
    private fb:FormBuilder,
    private _usuarios : UsuariosService

  ) {
    this.myForm=this.fb.group({      
      correo:["", [Validators.required]],
      clave:["", [Validators.required, Validators.minLength(6)]]
    })  
  }
  login(){
    console.log(this.myForm.value)
    //acá se conectaría con firebase o alguna otra app
    this._usuarios.authenticate()
  }
  
}



