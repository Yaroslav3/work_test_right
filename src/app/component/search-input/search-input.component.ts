import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalStorageService} from '../../core/service/local-storage.service';
import {BasicService} from '../../core/service/basic.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {
 public controlName: FormGroup;
 public isError = false;

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  constructor(private localStorageService: LocalStorageService,
              private basicService: BasicService) {
  }

  ngOnInit(): void {
    this.controlName = new FormGroup({
      nickName: new FormControl(null, Validators.required)
    });

    this.setName(this.getLocalStorageName());
    if (this.getLocalStorageName()) {
      this.onChange.emit(this.getLocalStorageName());
    }
  }

  onClickBtn(): void {
    if (this.controlName.status === 'VALID') {
      this.onChange.emit(this.controlName.value.nickName);
    } else if (this.controlName.status === 'INVALID') {
      this.isError = true;
    }
  }

  public onClickInput(): void {
    this.isError = false;
  }

  private setName(name: string): void {
    if (name !== '') {
      this.controlName.setValue({
        nickName: name
      });
    }
  }

  private getLocalStorageName(): string {
    if (!this.controlName.value.nickName || this.basicService.isDefined(this.controlName.value.nickName)) {
      if (this.localStorageService.getLocalStorageParamNickName() !== '') {
        return this.localStorageService.getLocalStorageParamNickName();
      }
    }
  }
}
