import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tof-ezero',
  templateUrl: './ezero.component.html',
  styleUrls: ['./ezero.component.scss'],
})
export class EzeroComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  // FROM TEMPLATE

  goToExample() {
    console.log('goToExample aufgerufen!');
    this.router.navigate(['/examples'], {
      relativeTo: this.route,
      queryParams: {
        dennis: 1,
        sefa: 1,
      },
    });
  }
}
