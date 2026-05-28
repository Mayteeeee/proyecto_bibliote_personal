import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Aquí abajo le agregamos el ".component" a la ruta del archivo
import { Recuperacion } from './pantallas/recuperacion/recuperacion'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recuperacion], // Ahora sí, esto funcionará perfecto
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-biblioteca');
}