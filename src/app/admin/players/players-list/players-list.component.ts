import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Player } from '../player';
import { playerTableColumns } from './player-table-columns';

@Component({
  selector: 'app-players-list',
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
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss',
})
export default class PlayersListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public readonly playerTableColumns = playerTableColumns;

  public players: Player[] = [];
  public totalPlayers!: number;
  public pendingPlayers!: number;
  public page = 1;
  public size = 10;

  ngOnInit(): void {}

  navigateToPlayerDetails(id: number) {
    this.router.navigate(['jogador', id], { relativeTo: this.route });
  }
}
