import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issues, RootState } from 'src/app/static/types';

@Component({
  selector: 'tof-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  issues$: any;

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.getDataFromStore();
  }

  getDataFromStore() {
    this.issues$ = this.store.select((state) => {
      const returnValue = Object.values(state?.issue?.entities);
      return Array.isArray(returnValue) && returnValue.length > 0
        ? returnValue
        : [];
    });
  }
}
