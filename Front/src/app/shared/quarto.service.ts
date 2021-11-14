import { Quarto } from './quarto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/quartos'
  formDataQuarto: Quarto = new Quarto();
  listQuarto: Quarto[];
  

  postQuarto(){
    return this.http.post(this.baseURL, this.formDataQuarto)
  }

  putQuarto(){
    return this.http.put(`${this.baseURL}/${this.formDataQuarto.quartoID}`, this.formDataQuarto);
  }

  deleteQuarto(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshListQuarto(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res =>this.listQuarto = res as Quarto[]);
  }

  getQuarto(id: number){
    return this.http.get(`${this.baseURL}/${id}`)
  }
}
