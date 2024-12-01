import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UploadFileProps, UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
  @Input() text = 'Faça upload da imagem da capa';
  @Input() fileTypes = '';
  @Input() acceptFiles = '';

  @Output() hanleUpload = new EventEmitter<UploadFileProps>();
  @Input() fileName = '';
  private readonly service = inject(UploadService);

  uploadFile(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.service.uploadFile(file).subscribe({
      next: response => {
        this.hanleUpload.emit(response);
        this.fileName = response.file;
      },
    });
  }

  removeImage() {
    this.hanleUpload.emit({
      file: '',
      fileKey: '',
    });
    this.fileName = '';
  }
}
