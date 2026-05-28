import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { RegistroComponent } from './pantallas/registro/registro';
import { PanelprincipalComponent } from './pantallas/panelprincipal/panelprincipal'; // <-- 1. Añadimos esta importación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Recuperacion, RegistroComponent, PanelprincipalComponent], // <-- 2. Lo agregamos aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-biblioteca');
}