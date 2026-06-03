import { Routes } from '@angular/router';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
// 👇 IMPORTACIÓN EXACTA CON TUS NOMBRES DE ARCHIVO
import { VerificacionComponent } from './pantallas/verificacion/verificacion'; 
import { DetalleLibroComponent } from './pantallas/detalleslibro/detalleslibro';

export const routes: Routes = [
  // Ruta inicial al Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Pantalla 2
  { path: 'login', component: LoginComponent },
  
  // Pantalla 4
  { path: 'recuperacion', component: Recuperacion },
  
  // Pantalla 5: Tu carpeta y componente real
  { path: 'verificacion', component: VerificacionComponent },

  //pantalla 9
  { path: 'detalleslibro', component: DetalleLibroComponent}
  
];