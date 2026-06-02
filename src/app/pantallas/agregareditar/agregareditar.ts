import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregareditar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agregareditar.html',
  styleUrl: './agregareditar.css',
})
export class Agregareditar {
  // Estado para la calificación editable (empieza en 0 estrellas)
  calificacion: number = 0;
  
  // Almacena la URL de la imagen cargada
  imagenPortada: string | null = null;

  // Cambia dinámicamente las estrellas seleccionadas
  cambiarCalificacion(puntos: number) {
    this.calificacion = puntos;
  }

  // Captura la foto o archivo seleccionado por el usuario
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenPortada = e.target.result; // Asigna la imagen a la vista
      };
      reader.readAsDataURL(file);
    }
  }
}
