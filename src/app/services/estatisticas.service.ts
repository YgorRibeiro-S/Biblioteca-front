import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {

  private apiUrl = 'http://localhost:8080/livros/estatisticas';

  constructor(private http: HttpClient) { }

  buscarEstatisticas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}