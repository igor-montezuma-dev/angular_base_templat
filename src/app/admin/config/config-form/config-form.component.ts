import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-config-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './config-form.component.html',
  styleUrl: './config-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConfigFormComponent {
  hide = true;
  modules: string[] = [
    'Dashboard',
    'Players',
    'Chat',
    'Requests',
    'Tournaments',
    'Contracts',
    'Configurations',
  ];
  public readonly location = inject(Location);
}
