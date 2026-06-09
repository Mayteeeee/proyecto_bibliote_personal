import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
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