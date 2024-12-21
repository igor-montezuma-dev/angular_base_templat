import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Solicitation } from '../solicitation';
import { solicitationTableColumns } from './solicitations-table-columns';

@Component({
  selector: 'app-solicitations-list',
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
  templateUrl: './solicitations-list.component.html',
  styleUrl: './solicitations-list.component.scss',
})
export default class SolicitationsListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public readonly solicitationTableColumns = solicitationTableColumns;

  navigateToPlayerDetails(id: number) {
    this.router.navigate(['solicitacao', id], { relativeTo: this.route });
  }

  public solicitations: Solicitation[] = [];
  public totalSolicitations!: number;
  public pendingSolicitations!: number;
  public page = 1;
  public size = 10;

  ngOnInit(): void {
    this.fetchSolicitations(this.page, this.size);
    this.fetchPendingSolicitations();
  }

  fetchSolicitations(page: number, size: number, search?: string) {

  }

  fetchPendingSolicitations() {

  }

  filterTable(search: string) {
    this.fetchSolicitations(this.page, this.size, search);
  }

  paginateTable(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.size = event.pageSize;

    this.fetchSolicitations(this.page, this.size);
  }
}
