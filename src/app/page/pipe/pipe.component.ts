import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  data = [
    {
      name: 'iphone',
      price: 35000,
    },
    {
      name: 'phone case',
      price: 880,
    },
    {
      name: 'battery',
      price: 990,
    },
    {
      name: 'Macbook pro',
      price: 41500,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
