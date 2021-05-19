import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { FinanceComponent } from './components/finance/finance.component';
import { GeneralLedgarComponent } from './components/general-ledgar/general-ledgar.component';
import { IncomestatementComponent } from './components/incomestatement/incomestatement.component';
import { InventorystockcardComponent } from './components/inventorystockcard/inventorystockcard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { JournalizingTransactionComponent } from './components/journalizing-transaction/journalizing-transaction.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';
import { ManagerComponent } from './components/manager/manager.component';
import { PurchasingorderComponent } from './components/purchasingorder/purchasingorder.component';
import { ReconciliationSheetComponent } from './components/reconciliation-sheet/reconciliation-sheet.component';
import { UserComponent } from './user/user.component';






const routes: Routes = [
  

   {path: '', pathMatch:'full',redirectTo:'LogIN'},
   {path:'main',pathMatch:'full',redirectTo:'main/dashboard'},
 

   {path: 'main', component: MainComponent,  
    children: [ 
      { path: 'dashboard', component:  DashboardComponent},
  ]},


  
  {path: 'main', component: MainComponent,  
  children: [ 
    { path: 'Management', component:  ManagementComponent},
]},


{path: 'main', component: MainComponent,  
children: [ 
  { path: 'Finance', component:  FinanceComponent},
]},


{path: 'main', component: MainComponent,  
children: [ 
  { path: 'LogIN', component:  LoginComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'Manager', component:  ManagerComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'jounaltran', component: JournalizingTransactionComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'general-ledgar', component: GeneralLedgarComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'reconcilsheet', component: ReconciliationSheetComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'income', component: IncomestatementComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'inventory', component: InventorystockcardComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'purchase', component: PurchasingorderComponent},
]},

{path: 'main', component: MainComponent,  
children: [ 
  { path: 'invoice', component: InvoiceComponent},
]},
 

  {path: 'User', component: UserComponent}, 
  {path: 'Management', component: ManagementComponent},
  {path: 'Manager', component: ManagerComponent},
  {path: 'LogIN', component: LoginComponent},
  {path: 'Finance', component: FinanceComponent},
  {path: 'jounaltran', component: JournalizingTransactionComponent},
  {path: 'general-ledgar', component: GeneralLedgarComponent},
  {path: 'reconcilsheet', component: ReconciliationSheetComponent},
  {path: 'income', component: IncomestatementComponent},
  {path: 'inventory', component:InventorystockcardComponent},
  {path: 'purchase', component:PurchasingorderComponent},
  {path: 'invoice', component: InvoiceComponent}


  // {path: 'manage', component: DashboardComponent},
  // {path: '**', component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
