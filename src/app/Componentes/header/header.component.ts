import { Component, OnInit } from '@angular/core';
import { Corretora } from './corretora';
import { CorretoraService } from '../../Service/corretora.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public corretoraSalvar:Corretora = new Corretora();
 
  constructor(private corretoraService:CorretoraService){}

  ngOnInit(){

  }


  public salvar(){

    this.corretoraService.salvar(this.corretoraSalvar).subscribe(
      response=>{
        alert("Gravado com Sucesso");
      },
      error=>{
        alert("ops houve algum problema ao salvar os dados");
      }
      
    )
  }

}
