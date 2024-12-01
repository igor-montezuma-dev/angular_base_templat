import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UploadService } from './../../services/upload.service';


import { TypeFile } from '../../enums/type-file.enum';
import { openSnackBar } from '../../utils/snackbar.utils';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { PreviewFiles } from '../../../core/models/preview-files.model';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  standalone: true,
  imports: [ CommonModule, MatIconModule],
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  @Input() public titleDescription!: string;
  @Input() public textDescription!: string;
  @Input() public typeFile!: TypeFile;
  @Input() public fileLength!: number;
  @Input() public filesModel!: any[];
  @Output() public fileChange: EventEmitter<any> = new EventEmitter<any>();


  public previewFiles!: PreviewFiles[];
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private dialog: MatDialog = inject(MatDialog);
  private uploadService = inject(UploadService);

  ngOnInit(): void {
    this.previewFiles = [];
    if(this.filesModel?.filter((file: any) => file)?.length){
      if(this.typeFile === TypeFile.Imagem) this.mapPreviewFiles('Imagem');
      if(this.typeFile === TypeFile.Pdf) this.mapPreviewFiles('Documento');
    }
  }

  private mapPreviewFiles(suffix: string): void{
    this.previewFiles = this.filesModel?.map((file: any) => {
      return {
        source: file,
        name: `${suffix} - ${file}`
      }
    });
  }


  public addImage(event: Event): void {
    const file: File = (event.target as HTMLInputElement).files![0];

    if(!this.typeFile?.includes(file?.type) && file.name) {
      openSnackBar(this.snackBar, `O tipo do Arquivo não condiz com os tipos aceitos!`);
      return;
    }

    if(this.previewFiles.length >= this.fileLength) {
      openSnackBar(this.snackBar, `A quantidade máxima para os arquivos são ${this.fileLength}!`);
      return;
    }

    if(file)
    {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: ProgressEvent<FileReader>) => {

        this.previewFiles.push({
          name: file.name,
          source: event?.target?.result,
          file: file,
        });


        this.uploadService.uploadFile(file).subscribe({
          next: (response: any) => {
            this.fileChange.emit(response);
          },
          error: () => {
            openSnackBar(this.snackBar, `Erro ao fazer upload do arquivo!`);
          }
        });


      }
    }
  }

  public previewImage(previewFile: PreviewFiles): void{
    this.dialog.open(ImagePreviewComponent, {
      data: previewFile?.source,
    });
  }

  public deleteImage(previewFile: PreviewFiles): void{
    const index: number = this.previewFiles.indexOf(previewFile);

    if (index !== -1) {
      this.previewFiles.splice(index, 1);
    }

    this.fileChange.emit(this.previewFiles);
  }
}

