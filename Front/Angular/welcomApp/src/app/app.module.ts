import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponentComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
