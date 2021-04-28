import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DennisPipe } from './pipes/dennis.pipe';
import { F1Component } from './components/f1/f1.component';
import { F2Component } from './components/f2/f2.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { EzeroComponent } from './components/ezero/ezero.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DennisPipe,
    F1Component,
    F2Component,
    ExamplesComponent,
    EzeroComponent,
  ],
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
