import { Component, OnInit } from '@angular/core';
import { Corretora } from '../../Model/corretora';
import { CorretoraService } from '../../Service/corretora.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public corretoraSalvar:Corretora = new Corretora();

  CadastroForm!: FormGroup
 
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
