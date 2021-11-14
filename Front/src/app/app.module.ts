import { Reservas } from './shared/reservas.model';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { LoginAuthService } from './shared/login-auth.service';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { AuthGuard } from './guards/auth.guard';
import { FinalizarReservaComponent } from './reservas/finalizar-reserva/finalizar-reserva.component';
import { QuartoComponent } from './quarto/quarto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContateNosComponent,
    CadastroUsuarioComponent,
    GaleriaComponent,
    ReservasComponent,
    LoginComponent,
    AdminAreaComponent,
    FinalizarReservaComponent,
    QuartoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  providers: [LoginAuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
