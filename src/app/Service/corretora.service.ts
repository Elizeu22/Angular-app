import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorretoraService {
  readonly url = 'xxxxxxxxx';
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

  gravarCorretora(formCorretora:any){
    return this.http.post(this.url +'/Gravar',formCorretora);
  }

  atualizarCorretora(id:string,formAtualiza:any){
    return this.http.put(this.url +'/Atualizar'+id,formAtualiza);
  }

  deletarCorretora(cnpj:string){
    return this.http.delete(this.url +'/Deletar'+cnpj);
  }













}
