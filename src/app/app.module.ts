import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductAreaComponent } from './product-area/product-area.component';
import { CropPredComponent } from './crop-pred/crop-pred.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    HeaderComponent,
    MobileNavComponent,
    ProductAreaComponent,
    CropPredComponent,
    FeedbackComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    // library.add(faCoffee,faWindowClose,faFilm,faFish);
  }
}
