import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'tof-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  darthVaderSubscription: Subscription = new Subscription();
  darthVaderData: unknown;

  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.getDarthVaderDataFromService();
  }

  getDarthVaderDataFromService() {
    this.cs.log('getDarthVaderDataFromService has been invoked');

    this.darthVaderSubscription = this.cs
      .getDarthVaderData()
      .subscribe(
        (darthVaderDataFromService) =>
          (this.darthVaderData = darthVaderDataFromService),
      );
  }

  ngOnDestroy() {
    if (this.darthVaderSubscription) {
      this.darthVaderSubscription.unsubscribe();
    }
  }
}
