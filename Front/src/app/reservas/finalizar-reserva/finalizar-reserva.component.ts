import { CadastroUsuarioService } from './../../shared/cadastro-usuario.service';
import { CadastroUsuarioComponent } from './../../cadastro-usuario/cadastro-usuario.component';
import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/shared/reservas.service';

@Component({
  selector: 'app-finalizar-reserva',
  templateUrl: './finalizar-reserva.component.html',
  styleUrls: ['./finalizar-reserva.component.css']
})

export class FinalizarReservaComponent implements OnInit {

  constructor(public service: ReservasService,public cadastro: CadastroUsuarioService) { }

  ngOnInit(): void {
  }
  
}
