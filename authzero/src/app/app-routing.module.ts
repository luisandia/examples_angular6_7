import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'precios',component:PreciosComponent},
  {path:'protegido',canActivate:[AuthGuardService],component:ProtegidoComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
