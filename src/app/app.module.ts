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
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { ManagerComponent } from './manager/manager.component';
import { FinanceComponent } from './finance/finance.component';
import { JournalizingTransactionComponent } from './journalizing-transaction/journalizing-transaction.component';
import { GeneralLedgarComponent } from './general-ledgar/general-ledgar.component';
import { ReconciliationSheetComponent } from './reconciliation-sheet/reconciliation-sheet.component';
import { IncomestatementComponent } from './incomestatement/incomestatement.component';
import { InventorystockcardComponent } from './inventorystockcard/inventorystockcard.component';
import { PurchasingorderComponent } from './purchasingorder/purchasingorder.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
declarations: [
AppComponent,
HeaderComponent,
MenuComponent,
FooterComponent,
DashboardComponent,
LoginComponent,
UserComponent,

ManagementComponent,
ManagerComponent,
FinanceComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
RouterModule

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

