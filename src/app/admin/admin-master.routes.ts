import { Route } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { ContractsComponent } from './contracts/contracts.component';
import { FormsComponent } from './forms/forms.component';
import { PlayersComponent } from './players/players.component';
import { SolicitationsComponent } from './solicitations/solicitations.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

export default [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    title: 'Dashboard',
    data: { title: 'Dashboard' },
    loadComponent: () => import('./dashboard/dashboard.component'),
  },
  {
    path: 'jogadores',
    component: PlayersComponent,
    title: 'Players',
    loadChildren: () => import('./players/players.routes'),
  },
  {
    path: 'solicitacoes',
    component: SolicitationsComponent,
    title: 'Requests',
    loadChildren: () => import('./solicitations/solicitations.routes'),
  },
  {
    path: 'torneios',
    component: TournamentsComponent,
    title: 'Tournaments',
    loadChildren: () => import('./tournaments/tournaments.routes'),
  },
  {
    path: 'formularios',
    component: FormsComponent,
    title: 'Forms',
    loadChildren: () => import('./forms/forms.routes'),
  },
  {
    path: 'contratos',
    component: ContractsComponent,
    title: 'Contracts',
    loadChildren: () => import('./contracts/contracts.routes'),
  },
  {
    path: 'configuracoes',
    component: ConfigComponent,
    title: 'Configuration',
    loadChildren: () => import('./config/config.routes'),
  },
] as Route[];
