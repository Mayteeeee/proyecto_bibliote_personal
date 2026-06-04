import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // 1. Agregamos la importación del RouterLink

@Component({
  selector: 'app-panelprincipal',
  standalone: true,
  imports: [RouterLink], // 2. Lo declaramos aquí para que el HTML reconozca los enlaces
  templateUrl: './panelprincipal.html',
  styleUrl: './panelprincipal.css'
})
export class PanelprincipalComponent {
  // Aquí puedes dejar cualquier método o variable que ya tuviera tu panel original
}