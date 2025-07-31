import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'tab2',
    loadComponent: () => import('./perfil/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: 'registro2',
    loadComponent: () =>
      import('./registro2/registro2.page').then((m) => m.Registro2Page),
  },
  {
    path: 'registro1',
    loadComponent: () =>
      import('./registro1/registro1.page').then((m) => m.Registro1Page),
  },
  {
    path: 'buscar',
    loadComponent: () =>
      import('./buscar/buscar.page').then((m) => m.BuscarPage),
  },
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./recuperar/recuperar.page').then((m) => m.RecuperarPage),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./results/results.page').then((m) => m.ResultsPage),
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.page').then((m) => m.DetailsPage),
  },
];
