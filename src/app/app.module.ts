import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    EditUserFormComponent,
    ViewPdfComponent
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
