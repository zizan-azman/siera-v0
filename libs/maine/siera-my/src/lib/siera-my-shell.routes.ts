import { Route } from '@angular/router';

export const sieraMyShellRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./feat/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'who-we-are',
    loadComponent: () =>
      import('./feat/who-we-are/who-we-are.component').then(
        (c) => c.WhoWeAreComponent
      ),
  },
  {
    path: 'what-we-do',
    loadComponent: () =>
      import('./feat/what-we-do/what-we-do.component').then(
        (c) => c.WhatWeDoComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
