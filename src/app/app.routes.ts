import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    // Caminho correto no plural:
    loadComponent: () => import('./courses/courses').then(m => m.Courses)
  }
];
