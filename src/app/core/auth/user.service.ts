import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';
import { SigninCredentialsResponse } from '../models/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userSubject = new BehaviorSubject<SigninCredentialsResponse | null>(null);
  helper = new JwtHelperService();
  constructor(private storage: StorageService) {}

  decodeAndNotify(user: SigninCredentialsResponse) {
    this.storage.saveToken(user.token);
    this.storage.setItem('user_logged', user.user);
    this._userSubject.next(user.user);
  }

  get user$() {
    return this._userSubject.asObservable();
  }
}
