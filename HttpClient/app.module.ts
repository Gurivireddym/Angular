import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Common1Interceptor } from './common1.interceptor';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:LocationStrategy, useClass:PathLocationStrategy},
    {provide: HTTP_INTERCEPTORS , useClass:Common1Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
