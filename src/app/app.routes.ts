import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },  {
    path: 'registro2',
    loadComponent: () => import('./registro2/registro2.page').then( m => m.Registro2Page)
  },
  {
    path: 'registro1',
    loadComponent: () => import('./registro1/registro1.page').then( m => m.Registro1Page)
  },

];
