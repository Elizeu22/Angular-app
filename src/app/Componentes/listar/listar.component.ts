import { Component } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

    public corretoraSalvar:Corretora = new Corretora();
   
    constructor(private corretoraService:CorretoraService){}
  
    ngOnInit(){
  
    }
  
  
    public listar(){
  
      this.corretoraService.listarCorretora().subscribe(
        response=>{
          alert("Retornado  com Sucesso");
        },
        error=>{
          alert("ops houve algum problema ao carregar os dados");
        }
        
      )
    }

}
