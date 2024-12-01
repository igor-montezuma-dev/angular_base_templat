import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dashboard-selector',
  standalone: true,
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './dashboard-selector.component.html',
  styleUrl: './dashboard-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSelectorComponent {
  stores = new FormControl('');
  sellers = new FormControl('');

  storeList: string[] = ['Tienda 1', 'Tienda 2', 'Tienda 3'];
  sellerList: string[] = ['Vendedor 1', 'Vendedor 2', 'Vendedor 3'];
}
