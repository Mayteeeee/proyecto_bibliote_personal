import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.css']
})
export class ConfiguracionComponent implements OnInit {
  // Variable para controlar la pestaña activa
  pestanaActiva: string = 'perfil'; 

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Función para cambiar de pestaña al hacer clic
  cambiarPestana(nombrePestana: string): void {
    this.pestanaActiva = nombrePestana;
  }

  guardarCambios(): void {
    console.log(`Guardando datos de la sección: ${this.pestanaActiva}`);
  }

  irA(pantalla: string): void {
    switch(pantalla) {
      case 'inicio': this.router.navigate(['/']); break;
      case 'mis-libros': this.router.navigate(['/mis-libros']); break;
      case 'prestamos': this.router.navigate(['/prestamos']); break;
      case 'perfil': this.router.navigate(['/configuracion']); break;
    }
  }
}