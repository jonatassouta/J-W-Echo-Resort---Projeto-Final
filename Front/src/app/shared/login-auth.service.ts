import { ClientesService } from './clientes.service';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from './../login/login.component';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, NgForm } from '@angular/forms';
import { Clientes } from './clientes.model';


@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  [x: string]: any;
  
  
  private usuarioAutenticado: boolean = false;
  private adminAutenticado: any | undefined;
  /* usuario: any={} */
  /* 
  public usuario: Clientes = new Clientes(); */
  
  mostrarMenuEmitter = new EventEmitter<boolean>()
  
  mostrar: boolean = false;
  
  constructor(private router: Router, public cli: ClientesService) { }


  fazerLogin(usuario: Clientes){
    
    console.log("estou aqui")
/* 
    this.cli.listClientes?.forEach(c => {
      if(c.email == usuario.email && c.senha == usuario.senha){
        this.adminAutenticado = c;
        alert("Logado")
      }
    });
    if(this.adminAutenticado != null){
      localStorage.setItem('adminAutenticado',JSON.stringify(this.adminAutenticado))
    }else{
      console.log("usuario "+ usuario.email +" senha: " + usuario.senha)
      alert(usuario + "Deu Erro")
    } */

    if (usuario.email == 'admin' && usuario.senha== '123'){
      this.adminAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/quarto']) 

    }else if (usuario.email == 'usuario@email.com' && usuario.senha== '123456'){


      this.usuarioAutenticado = true;
      alert("Logado com Sucesso!!")

     this.router.navigate(['/finalizar-reserva']) 
   } else {
      this.usuarioAutenticado = false;
      this.adminAutenticado = false;

      alert("Email ou Senha errado")

      this.mostrarMenuEmitter.emit(false);


    }
  }


  /* fazerLogin(form: NgForm){

    this.service.listClientes?.forEach(c => {
      if(c.email==this.usuario.email && c.senha==this.usuario.senha){
        this.adminAutenticado = c;
        alert("Logado")
      }
    });
    if(this.adminAutenticado != null){
      localStorage.setItem('adminAutenticado',JSON.stringify(this.adminAutenticado))
    }else{
      console.log("usuario "+ this.usuario +" senha: " + this.senha)
      alert(this.usuario + "Deu Erro")
    }
  } */

  adminEstaAutenticado(){
    return this.adminAutenticado;
  }

}
