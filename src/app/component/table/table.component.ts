import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Models} from '../../core/interfaces/interfaces';
import {BasicService} from '../../core/service/basic.service';
import {HelperService} from '../../core/service/helper.service';
import {LocalStorageService} from '../../core/service/local-storage.service';

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
  @Output() onChange: EventEmitter<Models.GitHub[]> = new EventEmitter();

  constructor(private basicService: BasicService,
              private helperService: HelperService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.isEmptyList = true;
  }

  ngOnChanges(): void {
    if (this.basicService.isDefined(this.gitHub)) {
      this.isEmptyList = this._isCheckListIsEmpty(this.gitHub);
      this.filterData = this.helperService.getLanguage(this.gitHub);
      this.setActiveRepository(this.gitHub);
    }
  }

  onDate(date: string): Models.DataFormat {
   return  this.helperService.getConvertedTimeFileUpload(date);
  }
  onSelectFilter(event: string): void{
    this.selectFilter = event;
  }

  onClickCheckBox(gitHub: Models.GitHub): void {
    if (this.basicService.isDefined(gitHub)) {
      if (!this.gitHub.filter(x => x.id === gitHub.id)[0].active) {
        this.gitHub.filter(x => x.id === gitHub.id).map(y => y.active = true);
      } else {
        this.gitHub.filter(x => x.id === gitHub.id).map(y => y.active = false);
      }
      this.onChange.emit(this.setActiveListRepository(this.gitHub));
    }
  }

  private _isCheckListIsEmpty(gitArray: Models.GitHub[]): boolean {
    return !gitArray.length;
  }

  private setActiveListRepository(gitArray: Models.GitHub[]): Models.GitHub[] {
    const list: Models.GitHub[] = [];
    gitArray.forEach((repo: Models.GitHub) => {
      if (repo.active) {
        list.push(repo);
      }
    });
    return list;
  }

  private setActiveRepository(gitHub: Models.GitHub[]): void {
    if (this.localStorageService.getLocalStorageSelectRepository(gitHub).length) {
      this.localStorageService.getLocalStorageSelectRepository(gitHub).forEach(repo => {
        this.onClickCheckBox(repo);
      });
    }
  }

}
