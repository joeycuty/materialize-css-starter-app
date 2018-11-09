import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageGenericOneComponent } from './pages/page-generic-one/page-generic-one.component';
import { PageGenericTwoComponent } from './pages/page-generic-two/page-generic-two.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageGenericOneComponent,
    PageGenericTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
