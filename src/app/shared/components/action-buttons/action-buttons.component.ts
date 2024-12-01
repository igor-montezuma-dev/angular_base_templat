import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  goToPrevPage() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
