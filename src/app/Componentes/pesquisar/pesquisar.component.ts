import { Component,Input } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';

@Component({
  selector: 'app-pesquisar',
  standalone: false,
  templateUrl: './pesquisar.component.html',
  styleUrl: './pesquisar.component.css'
})
export class PesquisarComponent {

    public corretoraSalvar:Corretora = new Corretora();

    corretoraPesquisar : any;

    @Input()
    inputCnpj: string = '';
    inputCep: string = '';
    inputLogradouro: string ='';
    inputnomeSocial: string = '';
    inputCorretora: string = '';
   
    constructor(private corretoraService:CorretoraService){}
  
    ngOnInit(){
  
    }
  
  
    public pesquisar(){
  
      this.corretoraService.pesquisarCorretora(this.corretoraSalvar.cnpj).subscribe(data=>{

        this.corretoraPesquisar = data;

        this.inputCorretora =  this.corretoraPesquisar.corretora;
        this.inputCep = this.corretoraPesquisar.cep;
        this.inputLogradouro =  this.corretoraPesquisar.logradouro;
        this.inputnomeSocial = this.corretoraPesquisar.nomeSocial;
      
  
      }
     
        
      )
    }

}
