import { PersonModal } from './../../model/PersonModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from 'src/app/service/API/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  lists: PersonModal[];
  mainForm: FormGroup = new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    location: new FormControl(),
  });
  id: number;
  search: string = '';
  today: Date;
  constructor(
    private dataSvc: DataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllData();
    this.creatForm();
    this.today = new Date();
  }
  //*建立表單初始值
  creatForm() {
    this.mainForm = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.mainForm.get('location').valueChanges.subscribe((res) => {
      console.log('value:', res);
    });
    this.mainForm.get('name').valueChanges.subscribe((res) => {
      console.log('value:', res);
    });
  }

  getAllData() {
    return this.dataSvc.getAllData().subscribe((res) => {
      let resData = res;
      this.lists = resData;
    });
  }
  //*編輯
  editData(id: number, name: string, gender: string, location: string) {
    this.mainForm.patchValue({
      id: id,
      name: name,
      gender: gender,
      location: location,
    });
  }
  //*修改後送出
  submitData() {
    this.id = this.mainForm.getRawValue().id;
    this.dataSvc
      .updateData(
        {
          name: this.mainForm.value.name,
          gender: this.mainForm.value.gender,
          location: this.mainForm.value.location,
        },
        this.id
      )
      .subscribe(() => {
        this.getAllData();
        this.reset();
      });
  }
  //*重新設定
  reset() {
    this.mainForm.reset();
  }
  //*刪除一筆資料
  deleteData(id) {
    return this.dataSvc.deleteData(id).subscribe((res) => {
      this.getAllData();
    });
  }

  //*搜尋功能
  filterData() {
    if (
      this.mainForm.value.name === '' &&
      this.mainForm.value.gender === '' &&
      this.mainForm.value.location === ''
    ) {
      return this.getAllData();
    } else {
      return this.dataSvc
        .filterData({
          name: this.mainForm.value.name,
          gender: this.mainForm.value.gender,
          location: this.mainForm.value.location,
        })
        .subscribe((res) => {
          let params: PersonModal[] = res;
          console.log(params);
          this.lists = params;
        });
    }
  }
  // childRender() {
  //   this.router.navigate(['/main/main-child']);
  // }
}
