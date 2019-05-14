import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'os-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // TODO: add auth request and saving JWT on frontend
    this.route.queryParams
      .pipe(
        skipWhile(v => !v.session_key),
        take(1),
        map(v => v.session_key),
      )
      .subscribe(console.log);
  }
}
