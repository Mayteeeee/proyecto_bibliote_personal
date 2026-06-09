import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 1. Importación necesaria para la navegación

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, RouterLink], // 2. Se agrega RouterLink aquí
  templateUrl: './prestamos.html',
  styleUrls: ['./prestamos.css']
})
export class PrestamosComponent implements OnInit {

  pestanaActiva: string = 'activos'; 

  ngOnInit(): void {
    console.log('Pantalla de préstamos dinámica lista.');
  }

  cambiarPestana(nombrePestana: string): void {
    this.pestanaActiva = nombrePestana;
  }
}