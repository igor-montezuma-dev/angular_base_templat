import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Tournament } from '../tournament';
import { tournamentsTableColumns } from './tournaments-table-columns';
import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';

@Component({
  selector: 'app-tournaments-list',
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
  templateUrl: './tournaments-list.component.html',
  styleUrl: './tournaments-list.component.scss',
})
export default class TournamentsListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public readonly tournamentsTableColumns = tournamentsTableColumns;

  public tournaments: Tournament[] = [];
  public totalTournaments!: number;
  public page = 1;
  public size = 10;

  ngOnInit(): void {
    this.fetchTournaments(this.page, this.size);
  }

  fetchTournaments(page: number, size: number, search?: string) {
    // this.service.getAllTournaments(page, size, search).subscribe({
    //   next: (response) => {
    //     this.tournaments = response.data.map(item => {
    //       return {
    //         ...item,
    //         startDate: item.startDatetime,
    //         startTime: item.startDatetime,
    //       }
    //     })
    //     this.totalTournaments = response.totalItems;
    //   },
    // });
  }

  filterTable(search: string) {
    this.fetchTournaments(this.page, this.size, search);
  }

  paginateTable(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.size = event.pageSize;

    this.fetchTournaments(this.page, this.size);
  }

  navigateToTournamentDetails(id: number) {
    this.router.navigate(['torneio', id], { relativeTo: this.route });
  }
}
