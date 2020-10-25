import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-v10-with-tailwandcss';

  compUI: string = 'centered-with-bottom-border';

  constructor() { }

  changeComponents(event) {

    this.compUI = event;
  }
}
