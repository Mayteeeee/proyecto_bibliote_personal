import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prestamos',
  standalone: true,
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
  }
}