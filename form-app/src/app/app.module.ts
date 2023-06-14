import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: UserFormComponent },
];

@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

