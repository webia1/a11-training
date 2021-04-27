import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tof-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.scss'],
})
export class F2Component implements OnInit {
  @Input() fromParent: string = 'EMPTY';
  @Input() magMichMeinParent: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
