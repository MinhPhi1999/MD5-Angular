import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {DetailComponent} from './user/detail/detail.component';
import {CreateComponent} from './user/create/create.component';
import {DeleteComponent} from './user/detail/delete/delete.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'detail',
        component: DetailComponent,
        children: [
          {
            path: 'delete',
            component: DeleteComponent
          }
        ]
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
