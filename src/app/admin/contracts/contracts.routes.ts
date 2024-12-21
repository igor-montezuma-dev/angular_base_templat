import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./contracts-list/contracts-list.component'),
  },

  {
    path: 'contrato/:contractId',
    title: 'Contract Details',
    loadComponent: () => import('./contracts-details/contracts-details.component'),
  },
] as Route[];
