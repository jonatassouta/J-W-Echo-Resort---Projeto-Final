import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/clientes.model';
import { LoginAuthService } from '../shared/login-auth.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //public usuario: Clientes = new Clientes();//private

  public usuario: Clientes = new Clientes

  constructor(public authService: LoginAuthService) { }

  ngOnInit(): void {

  }


  fazerLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
