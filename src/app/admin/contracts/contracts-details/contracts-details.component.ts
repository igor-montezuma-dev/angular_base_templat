import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgxCurrencyDirective } from 'ngx-currency';
import { NgxMaskDirective } from 'ngx-mask';
import { UserDetailsComponent } from '../../../shared/components/user-details/user-details.component';
import { Player } from '../../players/player';

@Component({
  selector: 'app-contracts-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UserDetailsComponent,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
    MatButtonModule,
    NgxCurrencyDirective,
    FormsModule
  ],
  templateUrl: './contracts-details.component.html',
  styleUrl: './contracts-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContractsDetailsComponent {
  value = 0
  public readonly location = inject(Location);
  public player: Player = {
    id: '1',
    name: 'Estafani',
    gender: 'Feminino',
    email: 'ester@example.com',
    phone: '8472637363',
    imageUrl:
      'https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Ativo',
    birthday: '21/03/2007',
    reprovedDueTo: null,
    role: 'admin',
    location: {
      city: 'São Paulo',
      state: 'SP',
      lat: null,
      lng: null,
    }
  };
}
