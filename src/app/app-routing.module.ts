import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [
  
  {path: '', component: LoginComponent},
  
  {path: 'driver', component: DriverComponent},
  {path: 'login', component: DashboardComponent},
 // {path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
