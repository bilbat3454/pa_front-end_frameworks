import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_framework';

  filter: "all" | "active" | "done" = "all";
  allItems = [
  { description: "Hello World", done: false},
  
  ];
  get items() {
    if (this.filter === "all") {
    return this.allItems;
  }
  return this.allItems.filter((item) =>
  this.filter === "done" ? item.done : !item.done
  );
  }
  addItem(description: string) {
  this.allItems.unshift({
  description,
  done: false
  });
 }
}
