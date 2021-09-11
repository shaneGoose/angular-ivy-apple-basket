import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppleComponent } from './apple/apple.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AppleComponent, BasketComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
