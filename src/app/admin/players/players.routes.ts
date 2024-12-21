import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./players-list/players-list.component'),
  },
  {
    path: 'jogador/:playerId',
    title: 'Player Details',
    loadComponent: () => import('./player-details/player-details.component'),
  },
  {
    path: 'aprovar-jogadores',
    title: 'Approve Players',
    loadComponent: () => import('./approve-players/approve-players.component'),
  },
] as Route[];
