import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; // Asegúrate que esté 'Router' aquí

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink], // Asegúrate que RouterLink esté aquí
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {
  mostrarPassword = false;
  mostrarConfirmarPassword = false;

  constructor(private router: Router) {} // Esto debe estar idéntico

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  toggleConfirmarPassword() {
    this.mostrarConfirmarPassword = !this.mostrarConfirmarPassword;
  }

  registrarUsuario(event: Event) {
    event.preventDefault();
    this.router.navigate(['/panelprincipal']); 
  }
}