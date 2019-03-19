import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { LearnComponent } from './learn/learn.component';
import { LookComponent } from './look/look.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'learn', component: LearnComponent},
  { path: 'look', component: LookComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    LearnComponent,
    LookComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
