import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourListComponent } from './tour-list/tour-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TourComponent } from './tour/tour.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    NavComponent,
    FooterComponent,
    TourComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
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
