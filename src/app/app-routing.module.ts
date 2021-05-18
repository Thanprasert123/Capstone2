import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';





const routes: Routes = [
  

   
 
  
  {path: 'User', component: UserComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: '', component: LoginComponent},
  {path: 'Management', component: ManagementComponent},
  {path: 'Manager', component: ManagerComponent},
  {path: 'LogIN', component: LoginComponent}

  // {path: 'manage', component: DashboardComponent},
  // {path: '**', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
