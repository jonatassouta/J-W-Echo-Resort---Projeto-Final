import { CadastroUsuario } from './cadastro-usuario.model';
import { Reservas } from './reservas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, RouterLink } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class ReservasService {

  constructor(private http: HttpClient, private router: Router) {
  }

  readonly baseURL = 'https://localhost:5001/api/quartos'
  //readonly baseURL = 'https://localhost:44377/api/quartos'
  formData: Reservas = new Reservas();
  list: Reservas[];

  

  valor: number;
  DataEntrada: string;
  DataSaida: string;
  tipoQuarto: string;
  valorTotalReserva: number;
  url: string;
  rNome: string;
  rEmal: string;
  rSenha: string;
  rCpf: string;
  rTelefone: string;
  rSexo: string;


  postReservas(){
    return this.http.post(this.baseURL, this.formData);
  }

  putReservas(){
    return this.http.put(`${this.baseURL}/${this.formData.quartoID}`, this.formData);
  }

  deleteReservas(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.list = res as Reservas[]);
  }

  getReservas(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }

  pegarPreco(p : number) {
    this.valor = p

 }

 CalcularData(dtEntrada: string, dtSaida: string, p : number, img : string, t: string){
  this.DataEntrada= dtEntrada;
  this.DataSaida = dtSaida;
  this.tipoQuarto = t;
  
  if(dtEntrada != "" && dtSaida != ""){
  this.url = "/assets/img/Quartos/"+img;

  var dt1 = new Date(dtEntrada);
  var dt2 = new Date(dtSaida);
  var timeDiff = Math.abs(dt1.getTime() - dt2.getTime());
  var diffDays = Math.ceil(timeDiff /(1000*3600*24));
  this.valorTotalReserva = diffDays * p;
  console.log(this.valorTotalReserva)
  }else{
    alert("Por favor preencha os campo de Data")

  }
}

  DadosCadastro(){    
    alert("Cadastrado com sucesso!")
    this.router.navigate(['/'])

  }
}
