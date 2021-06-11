import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { PersonModal } from 'src/app/model/PersonModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  mainUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMainData(): Observable<PersonModal[]> {
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts`);
  }
}
