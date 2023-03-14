import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { UsersComponent } from './users/users.component';

const approute: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent },
  {path:'signup', component: SignupComponent},
  {path:'parentcomponent', component: ParentComponent},
  {path:'objectcomponent', loadChildren: () => import("./object/object.module").then(m => m.ObjectModule)},
  {path:'studentcomponent', component: StudentComponent},
  {path:'users', component:UsersComponent},
  {path:'**', component: NotfoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(approute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
