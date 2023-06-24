import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='PCA3';
  
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  
}
