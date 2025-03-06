import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Corretora } from '../Model/corretora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorretoraService {
  readonly url = '';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

 

  public pesquisarCorretora(cnpj:string){
    return this.http.get(this.url + 'Pesquisar?cnpj='+cnpj);
  }

  public listarCorretora():Observable<Corretora[]>{
  return this.http.get<Corretora[]>(this.url +'Localizar')
  }

  public salvar(corretora:Corretora):Observable<Corretora>{
    return this.http.post<Corretora>(this.url +'Gravar',corretora)
  }

  public atualizarCorretora(id:string,formAtualiza:any){
    return this.http.put(this.url +'Atualizar?cnpj='+id,formAtualiza);
  }

  deletarCorretora(cnpj:string){
    return this.http.delete(this.url +'Deletar'+cnpj);
  }













}
