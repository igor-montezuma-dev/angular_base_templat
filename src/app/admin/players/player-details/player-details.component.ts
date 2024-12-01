import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';


import { Player } from '../player';
import { contactTableColumns } from './contract-table-columns';
import { UserDetailsComponent } from '../../../shared/components/user-details/user-details.component';
import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Contract } from '../../contracts/contract';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [UserDetailsComponent, CommomTableComponent, MatPaginatorModule, RouterLink, MatButtonModule],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export default class PlayerDetailsComponent implements OnInit {
  @Input() playerId!: number;

  constructor() {}

  public player!: Player;

  public readonly contactTableColumns = contactTableColumns;
  DATA: Contract[] = [
    {
      id: 1,
      userName: 'Player 1',
      startsAt: '21/03/2023',
      endsAt: '21/10/2023',
      status: 'Ativo',
      value: 300,
    },
    {
      id: 1,
      userName: 'Player 1',
      startsAt: '22/001/2023',
      endsAt: '01/12/2023',
      status: 'Inativo',
      value: 400,
    },
    {
      id: 1,
      userName: 'Player 1',
      startsAt: '15/03/2023',
      endsAt: '10/10/2023',
      status: 'Pendende',
      value: 500,
    },
  ];

  ngOnInit(): void {

  }


}
