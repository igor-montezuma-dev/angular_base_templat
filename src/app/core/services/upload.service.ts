import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';

export interface FileResponse {
  url: string;
  key: string;
}
@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<FileResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<FileResponse>(
      `${environment.api}/upload-file`,
      formData
    );
  }
}
