import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { UserDetailsComponent } from '../../../shared/components/user-details/user-details.component';
import { Solicitation } from '../solicitation';

@Component({
  selector: 'app-solicitations-details',
  standalone: true,
  imports: [UserDetailsComponent, MatButtonModule],
  templateUrl: './solicitations-details.component.html',
  styleUrl: './solicitations-details.component.scss',
})
export default class SolicitationsDetailsComponent implements OnInit {
  @Input() solicitationId!: number;

  constructor() {}

  public solicitation!: Solicitation;

  ngOnInit(): void {
    this.fetchSolicitationDetails();
  }

  fetchSolicitationDetails() {

  }
}
