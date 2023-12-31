import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  myForm:FormGroup
  
  constructor (
    private fb:FormBuilder
  ) {
    this.myForm=this.fb.group({
      nombre:["", [Validators.required]],
      correo:["", [Validators.required]],
      clave:["", [Validators.required, Validators.minLength(6)]]
    })   
    
  }
  registrarse(){
    console.log(this.myForm.value)
  }


}
