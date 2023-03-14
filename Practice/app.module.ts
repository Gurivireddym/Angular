import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { HeadingComponent } from './modules/heading/heading.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { StudentComponent } from './student/student.component';
import { UserdetailsDirective } from './userdetails.directive';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    StudentComponent,
    NotfoundComponent,
    ParentComponent,
    HeadingComponent,
    LoginComponent,
    UserdetailsDirective,
    SignupComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
