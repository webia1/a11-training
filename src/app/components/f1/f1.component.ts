import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

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
  broadcastMessage: string = 'Noch nichts';

  constructor(private data: DataService) {
    this.data.currentMessage.subscribe(
      (message) => (this.broadcastMessage = message),
    );
  }

  ngOnInit(): void {}

  clickMe() {
    console.log('F1 geklickt!');
    this.messageEvent.emit(this.message);
    this.data.changeMessage('Hello from F1');
  }
}
