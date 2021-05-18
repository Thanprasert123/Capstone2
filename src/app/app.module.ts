//เมืื่อสร้างแต่ละ คอมโพเน้นมาแก้ตรงนี้

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DriverComponent } from './driver/driver.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


import { Routes, RouterModule } from '@angular/router';

const routes : Routes =[
    {path: '', redirectTo:'/login', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: '**', redirectTo: '/login'}
]





@NgModule({
declarations: [
AppComponent,
HeaderComponent,
MenuComponent,
FooterComponent,
DashboardComponent,
DriverComponent,
ManagerComponent,
LoginComponent,
UserComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
RouterModule.forRoot(routes)
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

