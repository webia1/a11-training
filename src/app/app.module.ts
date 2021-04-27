import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DennisPipe } from './pipes/dennis.pipe';
import { F1Component } from './components/f1/f1.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DennisPipe, F1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
