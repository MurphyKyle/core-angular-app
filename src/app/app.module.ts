import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './products.service';
import { EmailService } from './email.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    NavbarComponent,
    LoginComponent,
    CartComponent,
    HomeComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [
    ProductsService,
    EmailService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
