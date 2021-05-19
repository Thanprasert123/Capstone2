import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { FinanceComponent } from './finance/finance.component';
import { GeneralLedgarComponent } from './general-ledgar/general-ledgar.component';
import { IncomestatementComponent } from './incomestatement/incomestatement.component';
import { InventorystockcardComponent } from './inventorystockcard/inventorystockcard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { JournalizingTransactionComponent } from './journalizing-transaction/journalizing-transaction.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { ManagerComponent } from './manager/manager.component';
import { PurchasingorderComponent } from './purchasingorder/purchasingorder.component';
import { ReconciliationSheetComponent } from './reconciliation-sheet/reconciliation-sheet.component';
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
  {path: 'LogIN', component: LoginComponent}


  // {path: 'manage', component: DashboardComponent},
  // {path: '**', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
