import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/static/types';

@Component({
  selector: 'tof-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent implements OnInit {
  constructor(
    private store: Store<RootState>,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    console.log('initForm');
  }
}
