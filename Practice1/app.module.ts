import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewoneComponent } from './newone/newone.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    NewoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
