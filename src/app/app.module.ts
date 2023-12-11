import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { AvantageComponent } from './avantage/avantage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { AccountComponent } from './account/account.component';
import { LoginExpComponent } from './login-exp/login-exp.component';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    MainbarComponent,
    AvantageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ConsultationComponent,
    AccountComponent,
    LoginExpComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
