import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlueButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
