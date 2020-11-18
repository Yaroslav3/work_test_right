import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit {
 public controlName: FormGroup;
 public isError = false;

  @Output() public onChange: EventEmitter<string> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
    this.controlName = new FormGroup({
      nickName: new FormControl(null, Validators.required)
    });
  }

  onClickBtn(): void {
    console.log(this.controlName.status);
    if (this.controlName.status === 'VALID') {
      this.onChange.emit(this.controlName.value.nickName);
    } else if (this.controlName.status === 'INVALID') {
      this.isError = true;
    }
  }

  public onClickInput(): void {
    this.isError = false;
  }

  public onGetName(): string {
    return '';
  }

}
