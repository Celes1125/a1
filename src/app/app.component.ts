import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer aplicación';
  modificado = false

  changeTitle(){
    this.title="Estoy cambiando la variable title"
    this.modificado = true

  }
}
