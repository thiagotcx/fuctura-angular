import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';

export const authenticatorGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const authenticationService: AuthenticationService = inject(AuthenticationService)
  
  if (authenticationService.getIsAuthenticated()) {
    return true;
  }

  Swal.fire('Sessão Expirada', 'Favor realizar novo Login.', 'info');
  return router.createUrlTree(['/entrar']);
};
