import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-teal-back-nav',
  templateUrl: './teal-back-nav.component.html',
  styleUrls: ['./teal-back-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TealBackNavComponent implements OnInit {
  showMenuNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuNav() {
    this.showMenuNav = !this.showMenuNav;
  }
}
