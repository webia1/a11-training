import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'tof-f1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class F1Component implements OnInit {
  @Input() fromParent: string = 'EMPTY';
  @Input() magMichMeinParent: boolean = true;

  @Output() messageEvent = new EventEmitter<string>();

  message: string = 'ich bin F1';

  constructor() {}

  ngOnInit(): void {}

  clickMe() {
    console.log('F1 geklickt!');
    this.messageEvent.emit(this.message);
  }
}
