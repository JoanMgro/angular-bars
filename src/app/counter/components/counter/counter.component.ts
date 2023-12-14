import { Component } from "@angular/core";

//Si el template no tiene mas de cuatro lineas se puede colocar en el mismo decorador
//de otra manera se deberia colocar en un archivo distinto.
@Component({
    selector:'app-counter',
    template: `
        <h3>{{ counter }}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>     
    `,

})
export class CounterComponent{

    public counter: number = 10;


    increaseBy( value: number): void{
      this.counter += value;
    }
  
    resetCounter():void{
      this.counter = 10;
    }
  

}