import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cta-sections',
  templateUrl: './cta-sections.component.html',
  styleUrls: ['./cta-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaSectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
