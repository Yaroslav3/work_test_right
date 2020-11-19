import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Models} from '../../core/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges{
  public isEmptyList = false;
  @Input() gitHub: Models.GitHub[];

  constructor() {
  }

  ngOnInit(): void {
    this.isEmptyList = true;
  }

  ngOnChanges(): void {
    this.isEmptyList = this._isCheckListIsEmpty(this.gitHub);
  }

  private _isCheckListIsEmpty(gitArray: Models.GitHub[]): boolean {
    return !gitArray.length;
  }
}
