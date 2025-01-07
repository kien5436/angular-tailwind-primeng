import { Routes } from '@angular/router';

import { LoginComponent } from '../pages/login/login.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';

//lazy load almost routes by default, preload which frequently accessed
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('../pages/dashboard/dashboard.component').then((c) => c.DashboardComponent),
        data: { preload: true },
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    loadComponent: () => import('../pages/not-found/not-found.component').then((c) => c.NotFoundComponent),
  },
];
