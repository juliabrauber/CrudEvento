import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventosComponent } from './componentes/eventos/eventos.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component'; 
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ContatosComponent } from './componentes/contatos/contatos.component'; 
import { PalestrantesComponent } from './componentes/palestrantes/palestrantes.component'; 
import { EventoDetalheComponent } from './componentes/evento-detalhe/evento-detalhe.component';
import { EventoListaComponent } from './componentes/evento-lista/evento-lista.component';
import { UserComponent } from './componentes/user/user.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegistrationComponent } from './componentes/user/registration/registration.component';

const routes: Routes = [
  {
    path:'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent},
      { path: 'registration', component: RegistrationComponent},
    ]
  },
    {path: 'user/perfil', component: PerfilComponent},
    {path: 'eventos', redirectTo : 'eventos/lista'},
  {
    path: 'eventos', component: EventosComponent,
    children: [
      {path: 'detallhe/:id', component: EventoDetalheComponent},
      {path: 'detallhe', component: EventoDetalheComponent},
      {path: 'lista', component: EventoListaComponent},
    ]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'palestrantes', component: PalestrantesComponent},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
