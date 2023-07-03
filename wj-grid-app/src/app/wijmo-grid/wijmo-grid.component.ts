// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-wijmo-grid',
//   templateUrl: './wijmo-grid.component.html',
//   styleUrls: ['./wijmo-grid.component.css']
// })
// export class WijmoGridComponent {

// }


// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-wijmo-grid',
//   templateUrl: './wijmo-grid.component.html',
//   styleUrls: ['./wijmo-grid.component.css']
// })
// export class WijmoGridComponent {
//   @Input() public gridData!: any[];
//   @Output() public rowSelected: EventEmitter<any> = new EventEmitter<any>();

//   public selectRow(row: any): void {
//     this.rowSelected.emit(row);
//   }
// }

import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { CollectionView } from '@grapecity/wijmo';

@Component({
  selector: 'app-wijmo-grid',
  templateUrl: './wijmo-grid.component.html',
  styleUrls: ['./wijmo-grid.component.css']
})
export class WijmoGridComponent {
  @Input() public gridData!: any[];
  @Output() public rowSelected: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('flexGrid') public flexGrid!: FlexGrid;
  private collectionView!: CollectionView;

  public ngAfterViewInit(): void {
    this.collectionView = new CollectionView(this.gridData);
    this.flexGrid.itemsSource = this.collectionView;
  }

  public selectRow(row: any): void {
    this.rowSelected.emit(row);
  }

  public sortColumn(columnName: string): void {
    const column = this.flexGrid.columns.getColumn(columnName);
    if (column) {
      column.allowSorting = true;
      column.sortAscending = !column.sortAscending;
      this.flexGrid.invalidate();
      this.flexGrid.refresh();
    }
  }

  public search(event: any): void {
    const searchText = event.target.value;
    this.collectionView.filter = (item: any) => {
      if (!searchText) {
        return true;
      }
      const lowerText = searchText.toLowerCase();
      return Object.keys(item).some((key) => {
        const value = item[key];
        return value && value.toString().toLowerCase().indexOf(lowerText) > -1;
      });
    };
    this.collectionView.refresh();
  }
}

