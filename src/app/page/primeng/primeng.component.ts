import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent implements OnInit {
  displayModal:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  showModalDialog(){
    this.displayModal=true;
  }
}
