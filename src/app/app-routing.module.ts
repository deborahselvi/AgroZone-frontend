import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from './header/header.component';
import { CropPredComponent } from './crop-pred/crop-pred.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:'agribusiness', component:ShopComponent },
  { path:'header', component:HeaderComponent },
  { path:'croppred', component:CropPredComponent},
  { path:'feedback', component:FeedbackComponent},
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
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
