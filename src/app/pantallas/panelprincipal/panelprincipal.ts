import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panelprincipal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panelprincipal.html',
  styleUrl: './panelprincipal.css'
})
export class PanelprincipalComponent {
  // Aquí puedes dejar cualquier método o variable que ya tuviera tu panel original
}