import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path:'product',component:ProductComponent },
  { path:'agribusiness', component:ShopComponent },
  { path:'header', component:HeaderComponent }
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
