import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';

import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournaments-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournaments-detail.component.html',
  styleUrl: './tournaments-detail.component.scss',
})
export default class TournamentsDetailComponent implements OnInit {


  @Input() tournamentId!: string;

  public tournament!: Tournament | null;

  ngOnInit(): void {
    this.getTournament();
  }

  getTournament() {

  }
}
