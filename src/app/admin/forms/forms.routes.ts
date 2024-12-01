import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./forms-list/forms-list.component'),
  },
  {
    path: 'novo-formulario',
    title: 'New form',
    loadComponent: () => import('./forms-form/forms-form.component'),
  },
  {
    path: 'torneio/:formId',
    title: 'Form Details',
    loadComponent: () => import('./forms-form/forms-form.component'),
  },
] as Route[];
