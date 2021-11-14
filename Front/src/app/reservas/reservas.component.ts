import { preco } from './../../assets/global';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { NgIf, NgIfContext } from '@angular/common';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReservasService } from '../shared/reservas.service';
import { Reservas } from '../shared/reservas.model';
import * as myGlobals from '../../assets/global';
import { LoginAuthService } from '../shared/login-auth.service';
import { now } from 'moment';





@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  @Output() myEvent = new EventEmitter();

  mostrarMenu: boolean = false;

  constructor(public service: ReservasService,
     private toastr: ToastrService, private authService: LoginAuthService) {
    }

  public DataHoje = Date.now();  
  public valor = 0
  public quartos: any=[];
  public DataEntrada = "";
  public DataSaida = "";
  public QtdPessoa = "";
  public QtdCrianca = "";
  public filtroTipo = "";
  private _filtroLista: string = '';
  public quartosFiltrados: any=[];


  ngOnInit(): void {
    this.service.refreshList();
  }

  povuarForm(selectedRecord: Reservas){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  
  public get filtroLista(): string{
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;
    this.quartosFiltrados = this.filtroLista ? this.filtrarQuartos(this.filtroLista): this.quartos;
  }

  PequisarQuartos(){

    try{

      if(this.DataEntrada > this.DataSaida){

        alert("Por favor Data de entrada não pode ser maior que data de saida")
        this.DataSaida = this.DataEntrada

      }else{

      }
    }catch(erro){
      alert("Erro no servidor Atualize a pagina")
      console.log(erro);

    }

  }

  filtrarQuartos(filtrarPor: string): any{
    filtrarPor= filtrarPor.toLocaleLowerCase();
    return this.quartos.filter(
      (evento: {tipoQuarto: string; ocuMaxima: string; disponivel:string}) => evento.tipoQuarto.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.ocuMaxima.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      evento.disponivel.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }

  guardarPreco(id: number){
    //for (let index = 0; index < this.service.list.length; index++) {
      //if(this.service.list.)
   // }
  }

  tipoDOQuarto(){
    if(this.filtroTipo.toLowerCase() == "premium"){
    }
  }

  ver(v: string){
    console.log(v)
  }


  



}

