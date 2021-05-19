import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';





const routes: Routes = [
  

   {path: '', pathMatch:'full',redirectTo:'login'},
   {path:'main',pathMatch:'full',redirectTo:'main/dashboard'},
 

   {path: 'main', component: MainComponent,  
    children: [ 
      { path: 'dashboard', component:  DashboardComponent},
  ]},
  
  {path: 'User', component: UserComponent}, 
  {path: 'Management', component: ManagementComponent},
  {path: 'Manager', component: ManagerComponent},
   {path: 'login', component: LoginComponent}

  // {path: 'manage', component: DashboardComponent},
  // {path: '**', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
