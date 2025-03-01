import { Component,Input } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';

@Component({
  selector: 'app-atualizar',
  standalone: false,
  templateUrl: './atualizar.component.html',
  styleUrl: './atualizar.component.css'
})
export class AtualizarComponent {

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
  
          try{
          this.corretoraPesquisar = data;
  
          this.inputCorretora =  this.corretoraPesquisar.corretora;
          this.inputCep = this.corretoraPesquisar.cep;
          this.inputLogradouro =  this.corretoraPesquisar.logradouro;
          this.inputnomeSocial = this.corretoraPesquisar.nomeSocial;
          this.inputCnpj = this.corretoraSalvar.cnpj;
          }
          catch(error)
          {
  
            alert("Ops houve um erro ao pesquisar os dados");
  
          }
        
    
        }
       
          
        )
      }

      public atualizar(){

        this.corretoraService.atualizarCorretora(this.corretoraSalvar.cnpj,this.corretoraPesquisar).subscribe(
          response=>{
            alert("Gravado com Sucesso");
          },
          error=>{
            alert("ops houve algum problema ao salvar os dados");
          }
          
        )
    
      }
    

      }


