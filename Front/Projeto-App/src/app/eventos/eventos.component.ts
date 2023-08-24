import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];

  larguraImagem: number = 150;
  margemImagem: number = 2;
  exibirImagem: boolean = true;
  private _filtroLista: string = ''

public get filtroLista (): string {
return this._filtroLista;
}
public set filtroLista (value: string){
  this._filtroLista = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
}
filtrarEventos(filtrarPor: string) : any {
filtrarPor = filtrarPor.toLocaleLowerCase();
return this.eventos.filter(
  ( evento:  any ) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
  evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
);
}

  constructor(private eventoService : EventoService) { }

  ngOnInit(): void {
    this.getEventos();
  }
  alterarImagem () {
    this.exibirImagem = !this.exibirImagem; 
  }

  public getEventos(): void {
    this.eventoService.getEventos( ).subscribe(
      Response => {
        this.eventos = Response;
        this.eventosFiltrados = Response;
        console.log('response', Response);
      }, 
      Error => console.log(Error),
      ); 
  }

}
