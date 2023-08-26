import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalleComponent } from './pages/detalle/detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ConcatenarPipe,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
