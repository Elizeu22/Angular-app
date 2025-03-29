import { Component, OnInit } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public corretoraSalvar: Corretora = new Corretora();

  CadastroForm!: FormGroup;

  constructor(private corretoraService: CorretoraService) {}

  ngOnInit() {}

  public salvar() {
    if (
      this.corretoraSalvar.cep == '' ||
      this.corretoraSalvar.cnpj == '' ||
      this.corretoraSalvar.corretora == '' ||
      this.corretoraSalvar.logradouro == '' ||
      this.corretoraSalvar.nomeSocial == ''
    ) {
      alert('Ha campos que nao foram preenchidos por favor verificar');
    } else {
      this.corretoraService.salvar(this.corretoraSalvar).subscribe(
        (response) => {
          alert('Gravado com Sucesso');
          
          this.corretoraSalvar.corretora = '';
          this.corretoraSalvar.cep = '';
          this.corretoraSalvar.logradouro = '';
          this.corretoraSalvar.nomeSocial = '';
          this.corretoraSalvar.cnpj = '';
        },
        (error) => {
          alert('ops houve algum problema ao salvar os dados');
        }
      );
    }
  }

  public limparDados() {
    this.corretoraSalvar.corretora = '';
    this.corretoraSalvar.cep = '';
    this.corretoraSalvar.logradouro = '';
    this.corretoraSalvar.nomeSocial = '';
    this.corretoraSalvar.cnpj = '';
  }
}
