import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DennisPipe } from './pipes/dennis.pipe';
import { F1Component } from './components/f1/f1.component';
import { F2Component } from './components/f2/f2.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { EzeroComponent } from './components/ezero/ezero.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DennisPipe,
    F1Component,
    F2Component,
    ExamplesComponent,
    EzeroComponent,
    WikiSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
