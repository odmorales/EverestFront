import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Result } from 'src/app/movie/interfaces/movie.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges {

  @Input() movies: Result[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['titulo', 'FechaEstreno', 'descripcion'];
  dataSource: any;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['movies'].currentValue){
      this.dataSource = new MatTableDataSource<Result>(this.movies);
      this.dataSource.paginator = this.paginator;
    }
  }

}
