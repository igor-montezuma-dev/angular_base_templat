import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: 'store-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDetailsComponent {
  @Input() store: unknown;
  @Input() isConsumption: boolean = true;
}
