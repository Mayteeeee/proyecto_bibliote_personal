import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
import { VerificacionComponent } from './pantallas/verificacion/verificacion';

export const routes: Routes = [
  // Ruta vacía: lo primero que se abrirá en tu navegador será la pantalla de inicio
  { path: '', component: Inicio }, 
  
  // Ruta para ir al Login cuando le des clic a "Comenzar"
  { path: 'login', component: LoginComponent },
  
  // Ruta para la recuperación de contraseña
  { path: 'recuperacion', component: Recuperacion },
  
  // Ruta para la pantalla de verificación
  { path: 'verificacion', component: VerificacionComponent },

  // Comodín por si escriben cualquier otra ruta rota en el navegador, te manda a inicio
  { path: '**', redirectTo: '' }
];