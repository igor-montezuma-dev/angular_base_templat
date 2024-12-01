import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';


import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SearchFieldComponent } from '../search-field/search-field.component';


import { MaterialModule } from '../../../material.module';
import SearchComponent from '../../search/search.component';
import { DisplayColumns } from './models/display-columns.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
  standalone: true,
  imports: [MaterialModule, SearchComponent, SearchFieldComponent, CommonModule, NgxMaskDirective, NgxMaskPipe]
})
export default class ListTableComponent implements OnInit, AfterViewInit, OnChanges {
  public tableDataSource!: MatTableDataSource<any>;
  public displayColumnsString: string[] = [];
  public textSearch!: string;
  public isMobile$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public selectedItemId: any;

  @ViewChild(MatSort) public sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() public displayedColumns: DisplayColumns[] = [];
  @Input() public checkCustomColors?: {[key: string]: string};
  @Input() public highlightRow!: boolean;
  @Input() public listTable: any[] = [];
  @Input() public routerLinkAction!: string;
  @Input() public useButton!: boolean;
  @Input() public useSecondaryButton!: boolean;
  @Input() public useCardButton!: boolean;
  @Input() public useSearch = true;
  @Input() public buttonLabel!: string;
  @Input() public secondaryButtonLabel!: string;
  @Input() public totalItems!: number;
  @Input() public typeList = "normal";
  @Input() public hasSelect = true;
  @Input() public useActionButton = true;
  @Input() public width!: string;

  @Output() public clickRowEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public clickButtonEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onPageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @Output() public itemSelected: EventEmitter<{ id: any, name: string }> = new EventEmitter<{ id: any, name: string }>();

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource = new MatTableDataSource<any>(changes['listTable']?.currentValue);
    this.tableDataSource.sort = this.sort;
  }

  public ngAfterViewInit(): void {
    this.tableDataSource.sort = this.sort;
    this.tableDataSource.paginator = this.paginator;
  }

  public ngOnInit(): void {
    this.tableDataSource = new MatTableDataSource<any>(this.listTable);

    this.tableDataSource.filterPredicate = (data: any, filter: string): boolean => {
      const textToSearch: string = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return `${currentTerm}: ${(data as { [key: string]: any })[key]}`;
      }).toLowerCase();

      const transformedFilter: string = filter?.trim()?.toLowerCase();

      return textToSearch.indexOf(transformedFilter) != -1;
    };

    this.displayColumnsString = this.displayedColumns.map((displayColumn: DisplayColumns) => displayColumn.key);

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => this.isMobile$.next(state.matches));
  }

  public search(textSearch: string): void {
    this.tableDataSource.filter = textSearch?.trim()?.toLowerCase();
  }

  public onPageEvent(page: PageEvent): void {
    console.log(page);
    this.onPageChange.emit(page);
  }

  public clickRow(row: any): void {
    this.clickRowEvent.emit(row);
    this.listTable?.forEach?.((row: any) => { row.highlighted = false });
    row.highlighted = true;
  }

  public selectItem(item: any): void {
    this.selectedItemId = item.id;
    this.itemSelected.emit({ id: item.id, name: item.name });
  }
}
