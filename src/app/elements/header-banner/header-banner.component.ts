import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
