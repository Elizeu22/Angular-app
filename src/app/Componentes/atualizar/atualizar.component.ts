import { Component,Input,OnChanges,SimpleChanges,OnInit,ChangeDetectorRef  } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';
import { FormControl,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar',
  standalone: false,
  templateUrl: './atualizar.component.html',
  styleUrl: './atualizar.component.css'
})
export class AtualizarComponent implements OnInit {

  @Input() public corretoraSalvar:Corretora = new Corretora();
  
      corretoraPesquisar : any;
  
      @Input() inputCnpj: string = '';
      @Input() inputCep: string = '';
      @Input() inputLogradouro: string ='';
      @Input() inputnomeSocial: string = '';
      @Input() inputCorretora: string = '';
    
      constructor(private corretoraService:CorretoraService){}
    
      ngOnInit(){
      }

      
      detectChanges(){
        this.corretoraSalvar.corretora;
        this.corretoraSalvar.cep;
        this.corretoraSalvar.logradouro;
        this.corretoraSalvar.nomeSocial;

    }
   


 //////////////////////////////////////////////// MÉTODO PARA PESQUISAR CORRETORA PELO CNPJ /////////////////////////////////////////////////////////////////////////////

      public pesquisar(){
    
        this.corretoraService.pesquisarCorretora(this.corretoraSalvar.cnpj).subscribe(data=>{
  
          try{
          this.corretoraPesquisar = data;
  
          this.corretoraSalvar.corretora =  this.corretoraPesquisar.corretora;
          this.corretoraSalvar.cep = this.corretoraPesquisar.cep;
          this.corretoraSalvar.logradouro =  this.corretoraPesquisar.logradouro;
          this.corretoraSalvar.nomeSocial = this.corretoraPesquisar.nomeSocial;
          this.inputCnpj = this.corretoraSalvar.cnpj;
          }
          catch(error)
          {
  
            alert("Ops houve um erro ao pesquisar os dados");
  
          }
        
    
        }
          
        )
      }



 //////////////////////////////////////////////// MÉTODO PARA ATUALIZAR CORRETORA  ///////////////////////////////////////////////////////////////////////////////////

      public atualizar(){

        this.corretoraService.atualizarCorretora(this.corretoraSalvar.cnpj,this.corretoraSalvar).subscribe()
        
          try{

            this.corretoraPesquisar.corretora =   this.corretoraSalvar.corretora
            this.corretoraPesquisar.cep =  this.corretoraSalvar.cep
            this.corretoraPesquisar.logradouro = this.corretoraSalvar.logradouro
            this.corretoraPesquisar.nomeSocial = this.corretoraSalvar.nomeSocial
            this.inputCnpj = this.corretoraSalvar.cnpj;




          alert("Dados atualizados com Sucesso");

          
            }
            catch(error)
            {
              console.log(error);
              alert("Ops houve um erro ao pesquisar os dados");
    
            }
        }
      
      }      

      
    


