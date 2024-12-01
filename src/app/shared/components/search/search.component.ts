import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ButtonComponent,
  ],
})
export class SearchComponent implements OnInit {
  @Input() public useButton!: boolean;
  @Input() public useOptions!: boolean;
  @Input() public option!: any[];
  @Input() public buttonLabel!: string;
  @Input() public routerLinkAction!: string;
  @Input() public textSearch!: string;
  @Output() public textSearchChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() public fullSearch: boolean = false;

  private readonly fb = inject(FormBuilder);
  searchField!: FormGroup;

  ngOnInit(): void {
    this.buildSearchField();
  }

  buildSearchField() {
    this.searchField = this.fb.group({
      searchInput: [''],
    });
  }

  public search(): void {
    this.textSearchChange.emit(this.textSearch);
  }
}
