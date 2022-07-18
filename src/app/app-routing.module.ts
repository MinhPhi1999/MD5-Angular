import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourListComponent} from "./tour-list/tour-list.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {TourComponent} from "./tour/tour.component";


const routes: Routes = [
  {path: 'list', component: TourListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: EditComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'tour/:id', component: TourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
