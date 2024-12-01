import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { PageEvent } from '@angular/material/paginator';
import { NgxMaskPipe } from 'ngx-mask';
import { CardComponent } from '../card/card.component';

const materialModules = [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatIconModule];
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
  | 'rating'
  | 'action'
  | 'icon';

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
  selector: 'app-commom-table',
  standalone: true,
  imports: [...materialModules, ...angularModules, ...libProviders, ...components],
  templateUrl: './commom-table.component.html',
  styleUrls: ['./commom-table.component.scss'],
})
export class CommomTableComponent implements OnChanges {
  @Output() handleNavigate = new EventEmitter<number>();
  @Output() searchEvent = new EventEmitter<string>();
  @Output() handlePagination = new EventEmitter<string>();


  filterTable = '';
  @Input({ required: true }) dataSourceData!: any[];
  @Input({ required: true }) tableColumns: TableColumns[] = [];

  displayedColumns: string[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  actions: any;

  length!: number;
  pageSize!: number;
  pageIndex!: number;
  pageEvent!: PageEvent;

  ngOnChanges(): void {
    this.dataSource.data = this.dataSourceData;
    this.displayedColumns = this.tableColumns.map(column => column.key);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex + 1;


  }
}
