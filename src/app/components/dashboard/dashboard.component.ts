import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'tof-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.getDarthVaderDataFromService();
  }

  getDarthVaderDataFromService() {
    this.cs.log(
      'Methode getDarthVaderDataFromService wurde aufgerufen!',
    );
  }
}
