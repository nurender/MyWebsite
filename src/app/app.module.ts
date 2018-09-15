import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HTMLComponent } from './html/html.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FOOTERComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ErrorComponent } from './error/error.component';
import { text } from '@angular/core/src/render3/instructions';


let routes : Routes = [
  {
    path : 'html',
    component : BodyComponent,
    children:[{
      path: 'html',
      component : BodyComponent
    },
    {
      path : 'HtmlHome',
      component : TestComponent
    },
    {
      path : 'Agnes',
      component : TestComponent
    },
    {
      path : "Nurender",
      component : HTMLComponent
    }]
  },
  {
    path : 'css',
    component : BodyComponent
  },
  {
    path : 'javascript',
    component : BodyComponent
  },
  {
    path : 'bootstrap',
    component : BodyComponent
  },
  {
    path : 'jquery',
    component : BodyComponent
  },
  {
    path : 'angular',
    component : BodyComponent
  },
  {
    path : 'java',
    component : BodyComponent
  },
  {
    path : 'text',
    component : TestComponent
  },
  {
    path: '**',
    component : ErrorComponent          
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HTMLComponent,
    SidebarComponent,
    FOOTERComponent,
    BodyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
