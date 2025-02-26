import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Corretora } from '../Componentes/header/corretora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorretoraService {
  readonly url = 'http://localhost:5085/corretores/';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  localizarCorretoras(){
    return this.http.get(this.url + '/Localizar')
  }

  pesquisarCorretora(cnpj:string){
    return this.http.get(this.url + '/Pesquisar'+cnpj);
  }



  public salvar(corretora:Corretora):Observable<Corretora>{
    return this.http.post<Corretora>(this.url +'Gravar',corretora)
  }

  atualizarCorretora(id:string,formAtualiza:any){
    return this.http.put(this.url +'/Atualizar'+id,formAtualiza);
  }

  deletarCorretora(cnpj:string){
    return this.http.delete(this.url +'/Deletar'+cnpj);
  }













}
