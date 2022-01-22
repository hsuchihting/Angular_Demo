import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  //*有效月份
  creditMonth: string[] = [];
  monthValue: string;
  //*有效年份
  creditYear: string[] = [];
  yearValue: string;

  ngOnInit(): void {
    this.validMonth();
    this.validYear();
  }

  //*有效月份
  validMonth() {
    range(1, 12)
      .pipe(
        map((x) => {
          return ('0' + x.toString()).slice(-2);
        })
      )
      .subscribe((res) => {
        this.creditMonth.push(res);
      });
  }

  checkMonth(month: string) {
    this.monthValue = month;
  }

  //*有效年份
  validYear() {
    const year = new Date().getFullYear();
    range(year, 5)
      .pipe(
        map((x) => {
          return ('0' + x.toString()).slice(-2);
        })
      )
      .subscribe((res) => {
        this.creditYear.push(res);
      });
  }

  checkYear(year: string) {
    this.yearValue = year;
  }
}
