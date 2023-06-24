import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCA5';
  dataFromParent: string = '';

  sendDataToChild() {
    this.dataFromParent = 'Data sent from Parent';
  }

  dataFromChild: string = '';

  receiveDataFromChild(data: string) {
    this.dataFromChild = data;
  }
}
