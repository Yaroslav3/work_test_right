import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Models} from '../../core/interfaces/interfaces';
import {BasicService} from '../../core/service/basic.service';
import {HelperService} from '../../core/service/helper.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, OnChanges{
  public isEmptyList = false;
  public filterData = [];
  public selectFilter: string;
  @Input() gitHub: Models.GitHub[];

  constructor(private basicService: BasicService,
              private helperService: HelperService) {
  }

  ngOnInit(): void {
    this.isEmptyList = true;
  }

  ngOnChanges(): void {
    if (this.basicService.isDefined(this.gitHub)) {
      this.isEmptyList = this._isCheckListIsEmpty(this.gitHub);
      this.filterData = this.helperService.getLanguage(this.gitHub);
    }
  }

  onDate(date: string): Models.DataFormat {
   return  this.helperService.getConvertedTimeFileUpload(date);
  }
  onSelectFilter(event: string): void{
    this.selectFilter = event;
  }

  private _isCheckListIsEmpty(gitArray: Models.GitHub[]): boolean {
    return !gitArray.length;
  }

}
