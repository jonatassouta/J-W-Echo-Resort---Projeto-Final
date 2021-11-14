import { ToastrService } from 'ngx-toastr';
import { CadastroUsuarioService } from './../shared/cadastro-usuario.service';
import { CadastroUsuario } from './../shared/cadastro-usuario.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservasService } from '../shared/reservas.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public asd ="";

  constructor(public service: ReservasService, public cadastro: CadastroUsuarioService,
     private toastr: ToastrService ) { }

  valorTotalReserva: number;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.cadastro.formDatacas.clienteID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.cadastro.postCadastroUsuario().subscribe(
      res => {
        this.resetForm(form);
        this.cadastro.refreshListCadastroUsuario();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.cadastro.putCadastroUsuario().subscribe(
      res => {
        this.resetForm(form);
        this.cadastro.refreshListCadastroUsuario();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.cadastro.formDatacas = new CadastroUsuario();
  }

  ver(){
    console.log(this.asd);
  }

}
