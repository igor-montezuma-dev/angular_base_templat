import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from '../auth/storage.service';



export const  authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const storageService: StorageService = inject(StorageService);
  const token: string = storageService.getToken();

  if (!request.url.includes('viacep')) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'ngrok-skip-browser-warning': '69420',
      },
    });
  }

  return next(request);
}
