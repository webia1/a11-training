import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tof-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent implements OnInit {
  queryParams: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.route.queryParams.subscribe((p) => {
      this.queryParams = p;
      console.log('Query Parameters: ', this.queryParams);
    });

    console.log('Snapshot: ', this.route.snapshot);
  }
}
