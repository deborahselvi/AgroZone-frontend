import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { CropPredComponent } from './crop-pred/crop-pred.component';


const routes: Routes = [
  { path:'product',component:ProductComponent },
  { path:'agribusiness', component:ShopComponent },
  { path:'header', component:HeaderComponent },
  { path:'croppred', component:CropPredComponent},
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
