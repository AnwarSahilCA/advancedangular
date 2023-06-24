import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output() public sendData=new EventEmitter<number>();
  send(){
    this.sendData.emit(5);
  }
  @Output() public sendData2=new EventEmitter<number>();
  send2(){
    this.sendData2.emit(10);
  }
  


  

}
