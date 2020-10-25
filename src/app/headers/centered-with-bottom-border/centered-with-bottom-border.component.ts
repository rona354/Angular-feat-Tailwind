import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-centered-with-bottom-border',
  templateUrl: './centered-with-bottom-border.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenteredWithBottomBorderComponent implements OnInit {

  subMenu: any = { solution: false, more: false, miniMenu: false };

  constructor() { }

  ngOnInit(): void { }
}
