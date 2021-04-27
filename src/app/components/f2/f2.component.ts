import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'tof-f2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.scss'],
})
export class F2Component implements OnInit {
  @Input() fromParent: string = 'EMPTY';
  @Input() magMichMeinParent: boolean = true;

  @Output() messageEvent = new EventEmitter<string>();

  message: string = 'ich bin F2';

  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    console.log('F2 geklickt!');
    this.messageEvent.emit(this.message);
  }
}
