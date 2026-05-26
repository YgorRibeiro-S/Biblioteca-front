import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private apiUrl = 'http://localhost:8080/emprestimos';

  constructor(private http: HttpClient) {}

  emprestar(livroId: number, usuarioId: number) {
    return this.http.post(
      `${this.apiUrl}/emprestar/${livroId}?usuarioId=${usuarioId}`,
      {},
      { responseType: 'text' }
    );
  }

  devolver(livroId: number) {
    return this.http.post(
      `${this.apiUrl}/${livroId}`,
      {},
      { responseType: 'text' }
    );
  }
}