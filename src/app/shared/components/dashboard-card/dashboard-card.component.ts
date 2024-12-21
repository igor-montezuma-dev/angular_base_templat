import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [CardComponent, CurrencyPipe],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input({ required: true }) icon = '';
  @Input({ required: true }) value!: number | string;
  @Input({ required: true }) title = '';
  @Input({ required: true }) bgIcon = '#1F274E';
  @Input() color = '#FFFFFF';
  @Input() isValueCurrency = false;
}
