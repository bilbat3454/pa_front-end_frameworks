import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_framework';
  displayVal= "Hello World";
  displayVal2= '';

  getValue(val:string)
  {
    console.warn(val)
    this.displayVal= val
  }
}

