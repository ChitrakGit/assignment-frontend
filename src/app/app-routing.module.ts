import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';

const routes: Routes = [
  { path: '', component: UsersTableComponent },
  { path: 'edit/:id', component: EditUserFormComponent },
  { path: 'add', component: EditUserFormComponent },
  { path: 'view/:id', component: ViewPdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
