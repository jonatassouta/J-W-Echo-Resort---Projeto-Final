import { QuartoComponent } from './quarto/quarto.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ReservasComponent } from './reservas/reservas.component';
import { GaleriaComponent } from './galeria/galeria.component';

import { HomeComponent } from './home/home.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AuthGuard } from './guards/auth.guard';
import { FinalizarReservaComponent } from './reservas/finalizar-reserva/finalizar-reserva.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'contate-nos', component: ContateNosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'reserva', component: ReservasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminAreaComponent, canActivate:[AuthGuard]},
  {path: 'finalizar-reserva', component: FinalizarReservaComponent},
  {path: 'quarto', component: QuartoComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
