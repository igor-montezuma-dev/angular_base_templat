import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Form } from '../form';
import { formsTableColumns } from './forms-table-columns';

@Component({
  selector: 'app-forms-list',
  standalone: true,
  imports: [
    CommomTableComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './forms-list.component.html',
  styleUrl: './forms-list.component.scss',
})
export default class FormsListComponent implements OnInit{

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly formsTableColumns = formsTableColumns;

  public forms: Form[] = [];
  public totalForms!: number;

  page = 1;
  size = 10;

  ngOnInit(): void {

  }





  navigateToFormsDetails(id: number) {
    this.router.navigate(['torneio', id], { relativeTo: this.route });
  }
}
