import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-libro',
  standalone: true,
  imports: [RouterLink, CommonModule, DecimalPipe],
  templateUrl: './detalleslibro.html',
  styleUrl: './detalleslibro.css'
})
export class DetalleLibroComponent {
  pestanaActiva: string = 'informacion';
  maxEstrellas: number[] = [1, 2, 3, 4, 5];

  // 👇 El interruptor que le falta a tu HTML actual
  hayLibroSeleccionado: boolean = true; 

  libro = {
    titulo: 'Título del Libro',
    autor: 'Autor Desconocido',
    calificacion: 0,
    estado: 'Sin leer',
    descripcion: 'Aquí se mostrará la sinopsis o comentarios del libro una vez que se conecte con la base de datos.'
  };

  cambiarPestana(pestana: string): void {
    this.pestanaActiva = pestana;
  }

  puntuarLibro(estrellasSeleccionadas: number): void {
    this.libro.calificacion = estrellasSeleccionadas;
    alert(`¡Puntuaste este libro con ${estrellasSeleccionadas} estrellas!`);
  }
}