import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskPipe } from 'ngx-mask';
import { CardComponent } from '../card/card.component';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatSelectModule,
];
const libProviders = [NgxMaskPipe];
const angularModules = [CommonModule];
const components = [CardComponent];

type TableData =
  | 'commom'
  | 'currency'
  | 'document'
  | 'phone'
  | 'longText'
  | 'date'
  | 'time'
  | 'action'
  | 'icon'
  | 'halfText'
  | 'criterion'
  | 'priority'
  | 'status';

export type TableColumns = {
  column: string;
  key: string;
  type: TableData;
  TypeColumn?: TypeColumn;
  actions?: DisplayAction[];
  icon?: string;
};

export enum TypeColumn {
  Description,
  Action,
}

export class DisplayAction {
  public icon!: string;
  public tooltip!: string;
  public action?: (row: any) => void;
}

@Component({
  selector: 'app-activities-table',
  standalone: true,
  imports: [CommonModule, ...materialModules, ...angularModules, ...libProviders, ...components],
  templateUrl: './activities-table.component.html',
  styleUrl: './activities-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesTableComponent {

}
