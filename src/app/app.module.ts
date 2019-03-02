import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { LearnComponent } from './learn/learn.component';
import { LookComponent } from './look/look.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    LearnComponent,
    LookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
