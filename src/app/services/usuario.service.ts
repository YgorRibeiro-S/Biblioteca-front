import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
  return this.http.get(`${this.apiUrl}`);
}

  cadastrar(usuario: Usuario): Observable<any> {
 return this.http.post(`${this.apiUrl}`, usuario, {
  responseType: 'text'
});
}

buscarPorId(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/buscar/${id}`);
}

atualizar(id: number, usuario: Usuario): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, usuario);
}

}