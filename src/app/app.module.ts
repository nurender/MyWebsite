import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HTMLComponent } from './html/html.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FOOTERComponent } from './footer/footer.component';


let routes : Routes = [
  {
    path : '',
    component : HTMLComponent
  },
  {
    path : 'text',
    component : TestComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HTMLComponent,
    SidebarComponent,
    FOOTERComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
