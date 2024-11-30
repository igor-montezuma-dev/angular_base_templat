import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';


import { Observable } from 'rxjs';
export type Response<T> = {
  data: T[];
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  page: number;
};
@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  protected readonly BASE_URL: string = '';
  protected readonly paginateParam: any;
  constructor(protected http: HttpClient) {}

  findAll(search: string = '', page = 1, limit = 100): Observable<Response<T>> {
    const params = new HttpParams().set('page', page).set('limit', limit).set('paginate', this.paginateParam).set('name', search);
    return this.http.get<Response<T>>(`${environment.api}/${this.BASE_URL}`, {
      params,
    });
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(`${environment.api}/${this.BASE_URL}`, body);
  }

  findById(id: number | string): Observable<T> {
    return this.http.get<T>(`${environment.api}/${this.BASE_URL}/${id}`);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${environment.api}/${this.BASE_URL}/${id}`);
  }

  update(id: number, body: Partial<T>): Observable<T> {
    return this.http.put<T>(
      `${environment.api}/${this.BASE_URL}/${id}`,
      body
    );
  }

  updatePatch(id: number, body: Partial<T>): Observable<T> {
    return this.http.patch<T>(
      `${environment.api}/${this.BASE_URL}/${id}`,
      body
    );
  }
}
