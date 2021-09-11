import { Component, Input } from "@angular/core";
import { Size } from "../../enums/size";
import { Apple } from "../../models/apple";

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  @Input() items: Apple[] = [];

  constructor() {}

  modify() {
    let date = new Date();
    const rando = Math.random();

    console.log('MODIFY');
    console.log('Before: ');
    console.dir(this.items);
    this.items.forEach( apple => {
      const sizeChoice = Math.floor((date.getMilliseconds() * rando) % 3 );
      switch(sizeChoice) {
        case 0: { apple.size = Size.SM; break; }
        case 1: { apple.size = Size.MED; break; }
        case 2: { apple.size = Size.LG; break; }
      }

      setTimeout(() => {
        date = new Date();
        const colorChoice = Math.floor((date.getMilliseconds() * rando) % 3 );
        switch(colorChoice) {
          case 0: { apple.color = 'red'; break; }
          case 1: { apple.color = 'green'; break; }
          case 2: { apple.color = 'yellow'; break; }
        }
      }, 
      date.getMilliseconds() % 1753);
      
    });
    console.log('After: ');
    console.dir(this.items);

  }
}