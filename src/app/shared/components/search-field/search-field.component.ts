import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';



@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, RouterModule]
})
export class SearchFieldComponent  {

  @Input() public useButton!: boolean;
  @Input() public buttonLabel!: string;
  @Input() public routerLinkAction!: string;
  @Input() public textSearch!: string;
  @Input() public hasSelect!: boolean;
  @Output() public clickButtonEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public textSearchChange: EventEmitter<string> = new EventEmitter<string>();

  public factories: any[] = [];






  public search(): void {
    this.textSearchChange.emit(this.textSearch);
  }




}
