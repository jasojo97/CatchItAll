import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {FormsModule} from '@angular/forms';
//import {routing} from "./app.routing"

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule, StoreModule, FormsModule, AppRoutingModule
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

