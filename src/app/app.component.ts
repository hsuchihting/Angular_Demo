import { Component } from '@angular/core';
import { PersonModal } from './model/PersonModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngDemo';
  show: boolean = true;
  data = [1, 2, 3, 4, 5, 6, 6, 7, 8];
  person: PersonModal = {
    name: 'Tim',
    gender:'male',
    location:'臺北市',
    height: 175,
    weight: 78,
  };
  constructor() {}
  ngOnInit(): void {}
}
