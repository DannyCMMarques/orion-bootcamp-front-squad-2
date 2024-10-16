import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userRole = localStorage.getItem('role');

  if (!userRole) {
    router.navigate(['/login']);
    return false;
  }

  const requiredRole = route.data['role'];

  if (requiredRole && requiredRole.includes(userRole)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
