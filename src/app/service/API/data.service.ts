import { OptionModal } from '../../model/OptionModal';
import { PersonModal } from './../../model/PersonModel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  options: OptionModal;
  mainUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {
    this.options = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  run() {
    console.log('service run');
  }

  //*取得所有資料
  getAllData(): Observable<PersonModal[]> {
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts`);
  }

  //*取得單一資料
  getData(): Observable<PersonModal[]> {
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts/1`);
  }

  //*新增一筆資料
  insertData(request: PersonModal) {
    return this.http.post(`${this.mainUrl}/posts`, request, this.options);
  }

  //*更新一筆資料
  updateData(request: PersonModal, id: number) {
    return this.http.put(`${this.mainUrl}/posts/${id}`, request, this.options);
  }

  //*刪除一筆資料
  deleteData(id: number) {
    return this.http.delete(`${this.mainUrl}/posts/${id}`, this.options);
  }

  //* 搜尋
  filterData(filterData: PersonModal): Observable<PersonModal[]> {
    let params = new HttpParams();
    params = params.append('name', filterData.name);
    params = params.append('gender', filterData.gender);
    params = params.append('location', filterData.location);
    return this.http.get<PersonModal[]>(`${this.mainUrl}/posts`, {
      ...this.options,
      params,
    });
  }
}
