import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  modalRef?: BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public larguraImagem: number = 150;
  public margemImagem: number = 2;
  public exibirImagem: boolean = true;
  private filtroListado: string = '';

public get filtroLista (): string {
return this.filtroListado;
}
public set filtroLista (value: string){
  this.filtroListado = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
}
public filtrarEventos(filtrarPor: string) : Evento[] {
filtrarPor = filtrarPor.toLocaleLowerCase();
return this.eventos.filter(
  evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
  evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
);
}

  constructor(
    private eventoService : EventoService,
    private modalService: BsModalService
    ) { }

  public ngOnInit(): void {
    this.getEventos();
  }
  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem; 
  }

  public getEventos(): void {
    const observer = {
      next: (eventosResp: Evento[])=> {
        this.eventos = eventosResp;
        this.eventosFiltrados = this.eventos;
      },
      error: (error: any) => {
        console.log(error)
      },
      complete: () => {},
    };
    this.eventoService.getEventos().subscribe(observer);
  }
}

openModal(template: TemplateRef<any>): void {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'})
}

confirm(): void {
  this.modalRef?.hide()
}

decline(): void {
  this.modalRef?.hide()
}