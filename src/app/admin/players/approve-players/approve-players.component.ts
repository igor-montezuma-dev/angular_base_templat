import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { UserDetailsComponent } from '../../../shared/components/user-details/user-details.component';
import { Player } from '../player';
import { openSnackBar } from '../../../shared/utils/snackbar.utils';

@Component({
  selector: 'app-approve-players',
  standalone: true,
  imports: [UserDetailsComponent, MatButtonModule],
  templateUrl: './approve-players.component.html',
  styleUrl: './approve-players.component.scss',
})
export default class ApprovePlayersComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  public snackBar: MatSnackBar = inject(MatSnackBar);

  public players: Player[] = [];
  public player!: Player;
  public pendingPlayers: number = 0;

  ngOnInit(): void {
    this.fetchPendingPlayers();
  }

  fetchPendingPlayers() {

  }

  checkPendingPlayers() {
    this.pendingPlayers = this.players.length;

    if (this.players.length > 0) {
      this.player = this.players[0];

    } else {
      openSnackBar(this.snackBar, 'Não há jogadores pendentes!');
      this.router.navigate(['../'], { relativeTo: this.route });

    }
  }

  approvePlayer(playerId: string) {

  }

  reprovePlayer(playerId: string) {

  }
}
