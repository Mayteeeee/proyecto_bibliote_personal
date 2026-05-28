import { Routes } from '@angular/router';
import { Inicio } from './pantallas/inicio/inicio';
import { Recuperacion } from './pantallas/recuperacion/recuperacion'; 
// Nota: Aquí importas el Login de tu compañero cuando te lo pase, por ahora pondremos uno provisional:
import { Component } from '@angular/core';

@Component({ standalone: true, template: '<div class="app-contenedor" style="padding:40px;"><h2>Pantalla de Login (Boceto 2)</h2><p>Aquí irá el código de tu compañero.</p></div>' })
class LoginProvisionalComponent {}

export const routes: Routes = [
  { path: '', component: Inicio }, // Ruta vacía: lo primero que se ve al entrar
  { path: 'login', component: LoginProvisionalComponent }, // Al darle "Comenzar" vendrá aquí
  { path: 'recuperar', component: Recuperacion }
];