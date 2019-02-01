import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';
import {UsuarioEditarComponent} from './components/usuario/usuario-editar.component';
import {UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.route';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario/:id', component: UsuarioComponent, children: USUARIO_ROUTES},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
