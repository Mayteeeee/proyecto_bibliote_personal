<<<<<<< HEAD
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
>>>>>>> 62ed1e7d67862fbffd7795bb00c4ec0ed8c0fb53

@Component({
  selector: 'app-prestamos',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterLink],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css'
})
export class PrestamosComponent {

  constructor(private router: Router) {}

  guardarPrestamo(event: Event) {
    event.preventDefault();
    
    // Aquí irá la lógica de guardar en la base de datos más adelante
    alert('¡Préstamo registrado con éxito!');
    
    // Te regresa automáticamente al panel principal
    this.router.navigate(['/panelprincipal']);
=======
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
>>>>>>> 62ed1e7d67862fbffd7795bb00c4ec0ed8c0fb53
  }
}