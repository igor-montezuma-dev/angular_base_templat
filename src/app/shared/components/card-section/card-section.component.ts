import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CardSectionComponent {
  @Input() public text!: string;
  @Input() public useHeader!: boolean;
}
