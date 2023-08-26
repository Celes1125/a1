import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "registro", component: RegistroComponent},
  { path: "login", component: LoginComponent},
  { path: "productos/:id", component: DetalleComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
