import { Component, Input } from '@angular/core';
import { Size } from '../../enums/size';

@Component({
  selector: 'apple',
  templateUrl: './apple.component.html',
  styleUrls: [ './apple.component.css' ]
})
export class AppleComponent {
  @Input() color: string = 'red';
  @Input() size: Size = Size.SM;
  @Input() lotNumber: string = 'a';

  readonly appleSize = Size;

 constructor() {}
}
