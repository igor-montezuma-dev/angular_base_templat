import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Contract } from '../contract';
import { contractTableColumns } from './contract-table-columns';

@Component({
  selector: 'app-contracts-list',
  standalone: true,
  imports: [
    CommomTableComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    RouterLink,
  ],
  templateUrl: './contracts-list.component.html',
  styleUrl: './contracts-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContractsListComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly contractTableColumns = contractTableColumns;
  DATA = signal<Contract[]>([
    {
      id: 1,
      startsAt: '12/03/2024',
      endsAt: '12/03/2025',
      userName: 'Rodrigo',
      value: 4000,
      status: 'Ativo',
    },
    {
      id: 2,
      startsAt: '20/05/2025',
      endsAt: '20/05/2026',
      userName: 'Rodrigo',
      value: 5000,
      status: 'Inativo',
    },
  ]);

  navigateToContractDetails(id: number) {
    this.router.navigate(['contrato', id], { relativeTo: this.route });
  }
}
