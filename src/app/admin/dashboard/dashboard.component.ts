import { Component } from '@angular/core';
import { DashboardCardComponent } from '../../shared/components/dashboard-card/dashboard-card.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export default class DashboardComponent {}
