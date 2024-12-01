import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: 'user-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  @Input({ required: true }) user: unknown;
  @Input() isConsumption: boolean = true;

}
