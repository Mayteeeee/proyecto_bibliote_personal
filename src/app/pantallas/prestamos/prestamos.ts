import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule], // Usamos CommonModule para los condicionales *ngIf y *ngFor
  templateUrl: './prestamos.html',
  styleUrls: ['./prestamos.css']
})
export class PrestamosComponent implements OnInit {

  // Variable de estado para controlar la pestaña activa (activos o historial)
  pestanaActiva: string = 'activos'; // Inicialmente mostramos los préstamos activos

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Pantalla de préstamos dinámica lista.');
  }

  // Función para cambiar de pestaña al hacer clic
  cambiarPestana(nombrePestana: string): void {
    this.pestanaActiva = nombrePestana;
    console.log(`Cambiando a pestaña: ${this.pestanaActiva}`);
  }

  abrirAgregarPrestamo(): void {
    console.log('Redirigiendo al formulario de nuevo préstamo...');
  }

  irA(pantalla: string): void {
    switch(pantalla) {
      case 'inicio': this.router.navigate(['/']); break;
      case 'mis-libros': this.router.navigate(['/mis-libros']); break;
      case 'prestamos': this.router.navigate(['/prestamos']); break;
      case 'perfil': this.router.navigate(['/configuracion']); break; // Redirigimos a la URL correcta que definimos
    }
  }
}