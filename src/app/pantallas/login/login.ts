import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  
  mostrarPassword: boolean = false;

  constructor(private router: Router){}

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  iniciarSesion():void{
    console.log('Validando datos e ingressando...');
  
    this.router.navigate(['/mislibros']);
  }
}