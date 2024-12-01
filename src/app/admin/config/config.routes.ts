import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./config-list/config-list.component'),
  },
  {
    path: 'novo-admin',
    title: 'New collaborator',
    loadComponent: () => import('./config-form/config-form.component'),
  },
  {
    path: 'admin/:adminId',
    title: 'Collaborator details',
    loadComponent: () => import('./config-form/config-form.component'),
  },
] as Route[];
