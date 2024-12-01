import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.routes'),
  },

  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin-master.routes'),
  },


];
