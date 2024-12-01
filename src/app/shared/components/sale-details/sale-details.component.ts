import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-sale-details',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: 'sale-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaleDetailsComponent {
  @Input({ required: true }) user: unknown;
  @Input() isConsumption: boolean = true;
  @Input() isSales: boolean = false;
}
