import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter:number = 10;

  increaseBy(operation:number):void {
     this.counter += operation;
  }

  reset():void {
    this.counter = 10;
  }

}
