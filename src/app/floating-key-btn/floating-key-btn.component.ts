import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-key-btn',
  templateUrl: './floating-key-btn.component.html',
  styleUrls: ['./floating-key-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingKeyBtnComponent implements OnInit {

  listMenuItems: { title: string; activated: string; items: string[]; }[];

  @Output() clickedMenu = new EventEmitter<any>();               // <-- 🔘 event output

  constructor() { }

  ngOnInit(): void {

    this.listMenuItems = [
      {
        title: 'headers',
        activated: 'centered-with-bottom-border',
        items: ['centered-with-bottom-border', 'teal-header-background']
      },
      {
        title: 'app-shells',
        activated: 'dark-nav-feat-white-header',
        items: ['dark-nav-feat-white-header']
      },
      {
        title: 'page-sections',
        activated: 'hero-section',
        items: ['corat-coret', 'hero-section', 'feature-sections', 'cta-sections', 'sign-in-and-register']
      },
      {
        title: 'elements',
        activated: 'header-banner',
        items: ['header-banner']
      },
    ];

  }

  selectSubMenu(event: { item: string; }) {
    // ganti warna border yang aktif ketika diklik
    this.listMenuItems.filter(x =>
      x.items.indexOf(event.item) !== -1)[0].activated = event.item;
    // send to app.component
    this.clickedMenu.emit(event);
  }
}
