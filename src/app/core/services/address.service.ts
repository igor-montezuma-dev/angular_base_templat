import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressReponse } from '@core/models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getAddress(zipCode: string): Observable<AddressReponse> {
    return this.http.get<AddressReponse>(
      `https://viacep.com.br/ws/${zipCode}/json/`
    );
  }
}
