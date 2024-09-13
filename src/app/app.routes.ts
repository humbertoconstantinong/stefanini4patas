import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'rules',
    loadComponent: () =>
      import('./pages/rules/rules.component').then((m) => m.RulesComponent),
  },
  {
    path: 'adopt',
    loadComponent: () =>
      import('./pages/adopt-now/adopt-now.component').then(
        (m) => m.AdoptNowComponent
      ),
  },
];
