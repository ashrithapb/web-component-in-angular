import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myTitle = 'Add beneficiary';
  open = false;

  toggle(event: any) {
    console.log(event);
    this.open = event.detail;
  }
}
