import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChildApp';
  enterName="Anil";
  parentData="";
  transferData(){
    this.parentData=this.enterName;
  }
 
  sum=0;
 
  value=0;
  sendData(value: number){
    this.sum=value;
  }
  
  sendData2(value:number){
    this.sum=this.sum+value;
  }
  // i=0;
  // j=0;
  // mult:number[]=[];
  // multiple(num:number,limit:number){
  //   for(this.i=0;this.i<limit;this.i++){
  //     this.mult[this.j]=this.i*num;
  //     this.j++;

  //   }

  // }



}
