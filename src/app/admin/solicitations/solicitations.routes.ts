import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./solicitations-list/solicitations-list.component'),
  },
  {
    path: 'solicitacao/:solicitationId',
    title: 'Request details',
    loadComponent: () => import('./solicitations-details/solicitations-details.component'),
  },
  {
    path: 'aprovar-solicitacoes',
    title: 'Approve requests',
    loadComponent: () => import('./approve-solicitations/approve-solicitations.component'),
  },
] as Route[];
