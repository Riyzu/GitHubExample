import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SeccondComponent } from './seccond/seccond.component';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
const routes: Routes=[{path: 'first', component: FirstComponent},{path: 'second', component: SeccondComponent}]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SeccondComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
