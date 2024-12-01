import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

export type UploadFileProps = {
  file: string;
  fileKey: string;
};

@Injectable({ providedIn: 'root' })
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<UploadFileProps> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<UploadFileProps>(
      `${environment.api}/upload-file`,
      formData
    );
  }
}
