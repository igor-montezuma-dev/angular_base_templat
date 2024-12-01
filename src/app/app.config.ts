import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';
import { NgxCurrencyInputMode, provideEnvironmentNgxCurrency, } from 'ngx-currency';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    provideEnvironmentNgxMask(),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' } as MatFormFieldDefaultOptions,
    },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideToastr({
      preventDuplicates: true,
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
    }),
    provideEnvironmentNgxCurrency({
      align: 'left',
      allowNegative: true,
      allowZero: true,
      decimal: ',',
      precision: 2,
      prefix: 'R$ ',
      suffix: '',
      thousands: '.',
      nullable: true,
      min: null,
      max: null,
      inputMode: NgxCurrencyInputMode.Financial,
    }),
    provideAnimationsAsync(),
  ],
};
