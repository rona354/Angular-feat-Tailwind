import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-key-btn',
  templateUrl: './floating-key-btn.component.html',
  styleUrls: ['./floating-key-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingKeyBtnComponent implements OnInit {

  @Output() clickedMenu = new EventEmitter<any>();               // <-- 🔘 event output

  constructor() { }

  ngOnInit(): void {
  }

  selectSubMenu(event) {
    // console.log("FloatingKeyBtnComponent -> selectSubMenu -> event", event)
    this.clickedMenu.emit(event);
  }
}
