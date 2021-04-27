import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tof-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class F1Component implements OnInit {
  @Input() fromParent: string = 'EMPTY';
  @Input() magMichMeinParent: boolean = true;

  showHtml = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.magMichMeinParent) {
      console.log('F1: Mein Parent mag mich nicht, daher kein HTML');
    }
  }
}
