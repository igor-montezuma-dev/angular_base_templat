import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective } from 'ngx-mask';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [

    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    CardComponent,

    ActionButtonsComponent,

    NgFor,
    NgIf,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit{

  inputData:any;

  constructor(private ref:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit(): void {
    this.inputData = this.data;
  }

  closeDialog(){
    this.ref.close('closed');
  }
}
