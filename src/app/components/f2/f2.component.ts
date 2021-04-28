import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
  broadcastMessage: string = 'Noch nichts';

  constructor(private data: DataService) {
    this.data.currentMessage.subscribe(
      (message) => (this.broadcastMessage = message),
    );
  }

  ngOnInit(): void {}

  clickMe() {
    let temp = 10;
    console.log('F2 geklickt!');
    this.messageEvent.emit(this.message);
    this.data.changeMessage('Hello from F2');
  }
}
