import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-select-menu',
  templateUrl: './select-menu.component.html',
  styleUrls: ['./select-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectMenuComponent implements OnInit {

  isOpen: boolean = false;

  @Input() title: string;
  @Input() activatedItem: string;
  @Input() listItems: string[];

  @Output() clickedMenu = new EventEmitter<any>();               // <-- 🔘 event output

  constructor() { }

  ngOnInit(): void {
  }

}
