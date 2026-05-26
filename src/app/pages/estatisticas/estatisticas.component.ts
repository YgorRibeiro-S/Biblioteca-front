import { Component, OnInit } from '@angular/core';
import { EstatisticasService } from 'src/app/services/estatisticas.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  estatisticas: any;

  constructor(private service: EstatisticasService) {}

  ngOnInit(): void {

    this.service.buscarEstatisticas().subscribe({

      next: (dados) => {
        this.estatisticas = dados;
      },

      error: (erro) => {
        console.error('Erro ao buscar estatísticas', erro);
      }

    });

  }

}