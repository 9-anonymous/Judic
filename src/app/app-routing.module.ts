import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AccountComponent } from './account/account.component';
import { LoginExpComponent } from './login-exp/login-exp.component';

const routes: Routes = [
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'Account', component: AccountComponent,},
      
  
  { path: 'Account/Login', component: LoginComponent,},
  { path: 'Account/LoginExp', component: LoginExpComponent,},
 { path: 'Consultation', component: ConsultationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
