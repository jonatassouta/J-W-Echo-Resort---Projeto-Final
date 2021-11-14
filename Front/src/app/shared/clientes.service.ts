import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from './clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Clientes'
  formCliente: Clientes = new Clientes();
  listClientes: Clientes[];

  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.listClientes = res as Clientes[]);
  }

  getClientes(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }

}
