// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { AppComponent } from './app.component';
import { WijmoGridComponent } from './wijmo-grid/wijmo-grid.component';

@NgModule({
  declarations: [AppComponent, WijmoGridComponent],
  imports: [BrowserModule, WjGridModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
