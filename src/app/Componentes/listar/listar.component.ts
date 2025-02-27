import { Component, OnInit } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

      listarDados:any [] = [];
  
    constructor(private corretoraService:CorretoraService){}
  
    ngOnInit(){
       this.corretoraService.listarCorretora().subscribe((dados: any[])=>{
     
      this.listarDados = dados;
      
    })  

    
  
    }

}
