import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'register',
      loadComponent: () => import('./user-register/user-register.component').then(m => m.UserRegisterComponent)
    },
    {
      path: 'list',
      loadComponent: () => import('./user-list/user-list.component').then(m => m.UserListComponent)
    },
    {
      path: '',
      redirectTo: '/list',
      pathMatch: 'full'
    }
  ];
