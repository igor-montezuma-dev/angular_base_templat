import { Route } from '@angular/router';
import { canActivateGuard } from '../core/guards/login.guard';
import { ConfigComponent } from './config/config.component';
import { PlayersComponent } from './players/players.component';
import { SolicitationsComponent } from './solicitations/solicitations.component';

export default [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    title: 'Dashboard',
    data: { title: 'Dashboard' },
    loadComponent: () => import('./dashboard/dashboard.component'),
    canActivate: [canActivateGuard],
  },
  {
    path: 'usuarios',
    component: PlayersComponent,
    title: 'Usuários',
    loadChildren: () => import('./players/players.routes'),
    canActivate: [canActivateGuard],
  },
  {
    path: 'financeiro',
    component: SolicitationsComponent,
    title: 'Financeiro',
    loadChildren: () => import('./solicitations/solicitations.routes'),
    canActivate: [canActivateGuard],
  },
  {
    path: 'configuracoes',
    component: ConfigComponent,
    title: 'Configurações',
    canActivate: [canActivateGuard],
    loadChildren: () => import('./config/config.routes'),
  },
] as Route[];
