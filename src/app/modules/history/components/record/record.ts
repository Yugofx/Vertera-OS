import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as R from 'ramda';
import { Location } from '@angular/common';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'os-record',
  templateUrl: './record.html',
  styleUrls: ['./record.scss'],
})
export class RecordComponent implements OnInit {
  order: any;
  totals: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private historyService: HistoryService,
  ) {
  }

  ngOnInit() {
    this.order = R.clone(this.activatedRoute.snapshot.data['order']);
    this.totals = this.historyService.getSummary(this.order.products);
  }

  back(): void {
    this.location.back();
  }
}
