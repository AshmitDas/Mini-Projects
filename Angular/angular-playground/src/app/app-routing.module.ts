import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'user',canActivate:[AuthGuard] , component:UserComponent, children: [
    {path: '', component:DashBoardComponent},
    {path:'profile', component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
