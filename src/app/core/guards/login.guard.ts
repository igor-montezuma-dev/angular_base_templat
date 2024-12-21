import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../auth/storage.service';
import { UserService } from '../auth/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const userService = inject(UserService);
  const storageService = inject(StorageService);
  const router: Router = inject(Router);
  const toastrService = inject(ToastrService);
  const snackBar = inject(MatSnackBar);

  if (storageService.hasToken()) {
    return true;
  } else {
    snackBar.open(
      'Você precisa estar logado para acessar essa página',
      'Fechar',
      {
        duration: 3000,
      }
    );
    router.navigate(['home']);
    return false;
  }
};
