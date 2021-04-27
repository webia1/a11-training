import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { F1Component } from '../f1/f1.component';
import { F2Component } from '../f2/f2.component';

@Component({
  selector: 'tof-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent
  implements OnInit, OnDestroy, AfterViewInit {
  darthVaderSubscription: Subscription = new Subscription();
  darthVaderData: unknown;
  parentProperty = 'Form Parent Dashboard';

  someText: string = 'Sefa richtet aus: ';
  messageFromF1: string | null = null;
  messageFromF2: string | null = null;
  message: any = 'Noch keine Message!';

  @ViewChild(F1Component) childF1: any;
  @ViewChild(F2Component) childF2: any;

  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.getDarthVaderDataFromService();
  }

  ngAfterViewInit() {
    this.getMessagesFromChildren();
  }

  getMessagesFromChildren() {
    this.messageFromF1 = this.childF1.message;
    this.messageFromF2 = this.childF2.message;
  }

  receiveMessage($event: any) {
    this.message = $event;
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
