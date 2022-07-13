import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListStudentComponent } from './home/list-student/list-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CreateStudentComponent } from './home/create-student/create-student.component';
import { ListClassComponent } from './home/list-class/list-class.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    CreateStudentComponent,
    ListClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
