import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommomTableComponent } from '../../../shared/components/commom-table/commom-table.component';
import { Admin } from '../admin';
import { configTableColumns } from './config-table-columns';
//import { Admin } from '../admin';


@Component({
  selector: 'app-config-list',
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
  templateUrl: './config-list.component.html',
  styleUrl: './config-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfigListComponent implements OnInit{
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  public readonly configTableColumns = configTableColumns;

  DATA: Admin[] = [
    {
      id: 1,
      name: 'Admin 1',
      document: '746574899577',
      email: 'admin@example.com',
      password: '32423424',
      type: 'Admin',
      modules: ['Dashboard', 'Player'],
      status: 'Ativo',
    },
    {
      id: 2,
      name: 'Admin 2',
      document: '746584637577',
      email: 'admin2@example.com',
      password: '234324324',
      type: 'Admin master',
      modules: ['Dashboard', 'Player'],
      status: 'Inativo',
    },
  ];


  ngOnInit(): void {

  }




  navigateToAdminDetails(id: number) {
    this.router.navigate(['admin', id], { relativeTo: this.route });
  }
}
