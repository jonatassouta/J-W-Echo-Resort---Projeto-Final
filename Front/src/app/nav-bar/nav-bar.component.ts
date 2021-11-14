import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../shared/login-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private authService: LoginAuthService){

  }

  ngOnInit(){

    /* if (this.authService.mostrar == true){
      this.mostrarMenu = true;
    } */


    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
