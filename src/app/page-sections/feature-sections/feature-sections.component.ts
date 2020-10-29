import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feature-sections',
  templateUrl: './feature-sections.component.html',
  styleUrls: ['./feature-sections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureSectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
