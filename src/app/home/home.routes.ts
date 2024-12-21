import { Routes } from '@angular/router';
export default [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./signin/signin.component') },
  { path: 'recuperar-senha', loadComponent: () => import('./forgot-password/forgot-password.component') },
  { path: 'resetar-senha', loadComponent: () => import('./reset-password/reset-password.component') },

] as Routes;
