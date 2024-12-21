import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, RouterModule],
})
export default class SearchComponent {
  private factoryIdObserver: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @Input() public useButton!: boolean;
  @Input() public useSecondaryButton!: boolean;
  @Input() public secondaryButtonLabel!: string;
  @Input() public buttonLabel!: string;
  @Input() public routerLinkAction!: string;
  @Input() public textSearch!: string;
  @Input() public hasSelect!: boolean;
  @Input() public hasSearchIcon!: boolean;
  @Input() width!: string;
  @Output() public clickButtonEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public textSearchChange: EventEmitter<string> = new EventEmitter<string>();




  public search(): void {
    this.textSearchChange.emit(this.textSearch);
  }
}
