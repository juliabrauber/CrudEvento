import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Importe o módulo collapse

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { EventosComponent } from './eventos/eventos.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [	
    AppComponent,
    PalestrantesComponent,
    EventosComponent,
    NavComponent
   ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(), // Importe o módulo e chame forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
