import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Solicitation } from '../solicitation';
import { UserDetailsComponent } from '../../../shared/components/user-details/user-details.component';
import { openSnackBar } from '../../../shared/utils/snackbar.utils';

@Component({
  selector: 'app-approve-solicitations',
  standalone: true,
  imports: [UserDetailsComponent, MatButtonModule],
  templateUrl: './approve-solicitations.component.html',
  styleUrl: './approve-solicitations.component.scss',
})
export default class ApproveSolicitationsComponent implements OnInit {
 
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  public snackBar: MatSnackBar = inject(MatSnackBar);

  public solicitations: Solicitation[] = [];
  public solicitation!: Solicitation;
  public pendingSolicitations: number = 0;

  ngOnInit(): void {
    this.fetchPendingSolicitations();
  }

  fetchPendingSolicitations() {

  }

  checkPendingSolicitations() {
    this.pendingSolicitations = this.solicitations.length;

    if (this.solicitations.length > 0) {
      this.solicitation = this.solicitations[0];

    } else {
      openSnackBar(this.snackBar, 'Não há solicitações pendentes!');
      this.router.navigate(['../'], { relativeTo: this.route });

    }
  }

  approveSolicitation(solicitationId: string) {

  }

  reproveSolicitation(solicitationId: string) {

  }
}
