import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./tournaments-list/tournaments-list.component'),
  },

  {
    path: 'torneio/:tournamentId',
    title: 'Tournament Details',
    loadComponent: () => import('./tournaments-detail/tournaments-detail.component'),
  },
] as Route[];
