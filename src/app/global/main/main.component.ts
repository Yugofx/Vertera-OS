import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public isNotFoundPage: boolean = false;
  constructor() {}

  ngOnInit() {}
  public onActivate(e) {
    this.isNotFoundPage = e.constructor.name === 'OsNotFound';
  }
}
