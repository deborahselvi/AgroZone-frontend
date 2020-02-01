import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { CropPredComponent } from './crop-pred/crop-pred.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path:'agribusiness', component:ShopComponent },
  { path:'header', component:HeaderComponent },
  { path:'croppred', component:CropPredComponent},
  { path:'feedback', component:FeedbackComponent},
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'product', component:ProductAreaComponent },
  { path:'cart', component:CartComponent },
  { path:'checkout', component:CheckoutComponent },
  { path:'', component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
