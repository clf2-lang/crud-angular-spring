import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  {
    path: 'courses',
    title: 'Cursos',
    loadComponent: () => import('./courses/courses').then(m => m.Courses)
  },
  { path: '**', redirectTo: 'courses' }
];
