import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { RegistroComponent } from './pantallas/registro/registro';
import { PanelprincipalComponent } from './pantallas/panelprincipal/panelprincipal'; // <-- 1. Añadimos esta importación
=======
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion'; 
>>>>>>> 102601cbf338a066cf086a205ec68a636db5ce2a

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, Recuperacion, RegistroComponent, PanelprincipalComponent], // <-- 2. Lo agregamos aquí
=======
  imports: [RouterOutlet], 
>>>>>>> 102601cbf338a066cf086a205ec68a636db5ce2a
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'proyecto_bibliote_personal';
}