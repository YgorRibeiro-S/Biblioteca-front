import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  livrosInativos(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/inativos`);
}

  cadastrar(livro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, livro);
  }

 inativar(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/inativar/${id}`, {}, {
    responseType: 'text'
  });
}

  ativar(id: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/ativar/${id}`, {}, {
    responseType: 'text'
  });
}

  getEstatisticas() {
  return this.http.get<any>('http://localhost:8080/livros/estatisticas');
}

}