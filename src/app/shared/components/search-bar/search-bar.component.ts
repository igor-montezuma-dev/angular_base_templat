import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-bar',
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
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchBarComponent implements OnInit{
  searchValue: string = '';
  showFilter: boolean = false;

  @Input() hasFilter!: boolean;
  @Input() hasOrderFilter:boolean = true;
  @Input() hasButton: boolean = false;
  @Input() buttonLabel!: string;
  @Output() buttonClick = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();

  private readonly fb = inject(FormBuilder);
  searchField!: FormGroup;

  options: any[] = [
    {value: 'option-0', viewValue: 'Opção 1'},
    {value: 'option-1', viewValue: 'Opção 2'},
    {value: 'option-2', viewValue: 'Opção 3'},
  ];


  ngOnInit(): void {
    this.buildSearchField();
  }

  buildSearchField() {
    this.searchField = this.fb.group({
      searchInput: [''],
    });
  }


  onButtonClick() {
    this.buttonClick.emit();
  }

  onSearch(searchValue: string) {
    this.searchEvent.emit(searchValue);
  }
}
