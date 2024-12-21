import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, tap } from 'rxjs';

import { SigninCredentials, SigninCredentialsResponse } from '../models/auth';
import { UserService } from './user.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  auth({ credential, password }: SigninCredentials): Observable<SigninCredentialsResponse> {
    return this.http
      .post<SigninCredentialsResponse>(`${environment.api}/auth/login/adm`, {
        credential,
        password,
      })
      .pipe(tap((user) => this.userService.decodeAndNotify(user)));
  }

  forgot(email: string | null): Observable<any> {
    return this.http
      .post<SigninCredentialsResponse>(`${environment.api}/v1/noAuth/password/forgot`, {
        email,
      });
  }

  reset({ code, password, confirmPassword }: any): Observable<any> {
    return this.http
      .post<SigninCredentialsResponse>(`${environment.api}/v1/noAuth/password/reset`, {
        code,
        password,
        confirmPassword
      });
  }

  concactUs(contact: any): Observable<any>{
    return this.http.post<any>(`${environment.api}/v1/noAuth/contactUs`, contact)
  }
}
