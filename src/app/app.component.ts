import { Component, VERSION } from '@angular/core';
import { Size } from '../enums/size';
import { Apple } from '../models/apple';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  apples: Apple[] = [
    { color: 'red', size: Size.LG, lotNumber: '0' },
    { color: 'red', size: Size.LG, lotNumber: '1' },
    { color: 'red', size: Size.LG, lotNumber: '2' }
  ];

  clear() {
    
  }
}
