import {Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements OnInit, OnChanges {

  @Input() filter: [];
  @Output() select = new EventEmitter<string>();
  public isOpenDropdown = false;
  public selectLanguage: string;

  ngOnChanges(): void {
  }

  ngOnInit(): void {
  }

  onSelect(value: string): void {
    this.selectLanguage = value;
    this.select.emit(value);
    this.isOpenDropdown = false;
  }

  onFocusOut(): void {
    this.isOpenDropdown = false;
  }

  onOpenDropdown(): void {
    this.isOpenDropdown = true;
  }

  onClickOutsideCount(): void {
    this.isOpenDropdown = false;
  }
}
