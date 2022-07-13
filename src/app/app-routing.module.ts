import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {ListStudentComponent} from './home/list-student/list-student.component';
import {CreateStudentComponent} from './home/create-student/create-student.component';
import {ListClassComponent} from "./home/list-class/list-class.component";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
},
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
      path: 'list-student',
      component: ListStudentComponent
    },
      {
        path: 'create-student',
        component: CreateStudentComponent
      },
      {
        path: 'list-class',
        component: ListClassComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
