import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Models} from '../../core/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges{
  @Input() gitHub: Models.GitHub[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('gitHub', this.gitHub);
  }
}
