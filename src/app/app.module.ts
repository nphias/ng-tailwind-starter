import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideDirective } from './helpers/clickout';

import { LazyModule } from './lazymodule/lazy.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    LazyModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
