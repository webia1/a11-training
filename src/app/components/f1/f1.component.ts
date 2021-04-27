import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tof-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class F1Component implements OnInit {
  @Input() fromParent: string = 'EMPTY';
  @Input() magMichMeinParent: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
