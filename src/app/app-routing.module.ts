import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Componentes/header/header.component';
import { PesquisarComponent } from './Componentes/pesquisar/pesquisar.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { AtualizarComponent } from './Componentes/atualizar/atualizar.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'Pesquisar',component:PesquisarComponent},
  {path:'Listar',component:ListarComponent},
  {path:'Atualizar',component:AtualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
