import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { RegistroComponent } from './pantallas/registro/registro';
import { PanelprincipalComponent } from './pantallas/panelprincipal/panelprincipal';
import { LoginComponent } from './pantallas/login/login';
import { Recuperacion } from './pantallas/recuperacion/recuperacion';
// 👇 IMPORTACIÓN EXACTA CON TUS NOMBRES DE ARCHIVO
import { VerificacionComponent } from './pantallas/verificacion/verificacion'; 
import { DetalleLibroComponent } from './pantallas/detalleslibro/detalleslibro';
import { Agregareditar } from './pantallas/agregareditar/agregareditar';
import { Mislibros } from './pantallas/mislibros/mislibros';

export const routes: Routes = [
  // Ruta vacía: lo primero que se abrirá en tu navegador será la pantalla de inicio
  { path: '', component: Inicio }, 
  
  // Ruta para ir al Login cuando le des clic a "Comenzar"
  { path: 'login', component: LoginComponent },

  { path: 'registro', component: RegistroComponent},

  { path: 'panelprincipal', component: PanelprincipalComponent },
  
  // Ruta para la recuperación de contraseña
  { path: 'recuperacion', component: Recuperacion },
  
  // Pantalla 5: Tu carpeta y componente real
  { path: 'verificacion', component: VerificacionComponent },

  //pantalla 9
  { path: 'detalleslibro', component: DetalleLibroComponent},
  

  { path: 'agregareditar', component: Agregareditar },

  { path: 'mislibros', component: Mislibros}
];