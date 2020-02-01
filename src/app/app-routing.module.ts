import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { CropPredComponent } from './crop-pred/crop-pred.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  { path:'product',component:ProductComponent },
  { path:'agribusiness', component:ShopComponent },
  { path:'header', component:HeaderComponent },
  { path:'croppred', component:CropPredComponent},
  { path:'feedback', component:FeedbackComponent},
  { path:'', component:CropPredComponent}
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
