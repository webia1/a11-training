import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { EzeroComponent } from './components/ezero/ezero.component';
import { F1Component } from './components/f1/f1.component';
import { F2Component } from './components/f2/f2.component';
import { IssuesComponent } from './components/issues/issues.component';
import { WikiSearchComponent } from './components/wiki-search/wiki-search.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'f1',
    component: F1Component,
  },
  {
    path: 'f2',
    component: F2Component,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
  },
  {
    path: 'ezero',
    component: EzeroComponent,
  },
  {
    path: 'search',
    component: WikiSearchComponent,
  },
  {
    path: 'issues',
    component: IssuesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
