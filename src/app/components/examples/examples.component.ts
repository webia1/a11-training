import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { forkJoin } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'tof-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent implements OnInit {
  routeData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllRouteData();
  }

  getAllRouteData() {
    const routeObservables = [
      this.route.paramMap.pipe(map(() => window.history.state)),
      this.route.url,
      this.route.params,
      this.route.queryParams,
      this.route.fragment,
      this.route.data,
    ];

    forkJoin(routeObservables.map((r) => r.pipe(first()))).subscribe(
      (routeData: any) => {
        this.routeData = routeData;
        console.log('Route Data: ', this.routeData);
      },
    );
  }
}
