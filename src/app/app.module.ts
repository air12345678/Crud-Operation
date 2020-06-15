import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { HomeComponent } from './home/home.component';
import { InstructionComponent } from './instruction/instruction.component';
import { LoginComponent } from './login/login.component';
import { InsertComponent } from './insert/insert.component';
import {FormsModule } from '@angular/forms'; 
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    StudentFormComponent,
    HomeComponent,
    InstructionComponent,
    LoginComponent,
    InsertComponent,
    ViewComponent,
    MainComponent,
    // HttpModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
