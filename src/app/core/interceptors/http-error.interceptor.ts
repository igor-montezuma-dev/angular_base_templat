import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function HttpErrorInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const toast = inject(ToastrService);
  const spinner = inject(NgxSpinnerService);
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      spinner.hide().then(() => toast.error(`${error.error.error}`));
      return throwError(() => {});
    })
  );
}
