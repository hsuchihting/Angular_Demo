import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PersonModal } from 'src/app/model/PersonModel';
import { DataService } from 'src/app/service/API/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  formName = new FormControl('');
  form: FormGroup;
  lists: PersonModal[];
  name: string = '';
  gender: string;
  height: number = 0;
  location: string = '';
  id: number;
  search: string = '';

  constructor(private formBuilder: FormBuilder, private dataSvc: DataService) {}

  ngOnInit(): void {
    this.creatForm();
    this.getAllData();
  }

  //*建立表單初始值
  creatForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      height: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required],
    });
    this.form.get('name').valueChanges.subscribe((res) => {
      console.log('value:', res);
    });
  }

  //* 取得所有資料
  getAllData() {
    return this.dataSvc.getAllData().subscribe((res) => {
      this.lists = res;
    });
  }

  //* 新增一筆資料
  insertData() {
    this.dataSvc
      .insertData({
        name: this.form.value.name,
        gender: this.form.value.gender,
        location: this.form.value.location,
      })
      .subscribe(() => {
        this.getAllData();
        this.reset();
      });
  }

  //*刪除一筆資料
  deleteData(id) {
    return this.dataSvc.deleteData(id).subscribe((res) => {
      this.getAllData();
    });
  }

  //*重新設定
  reset() {
    this.form.reset();
  }

  //*編輯
  editData(id: number, name: string, gender: string, location: string) {
    this.form.patchValue({
      id: id,
      name: name,
      gender: gender,
      location: location,
    });
  }

  //*修改後送出
  submitData() {
    this.id = this.form.getRawValue().id;
    this.dataSvc
      .updateData(
        {
          name: this.form.value.name,
          gender: this.form.value.gender,
          location: this.form.value.location,
        },
        this.id
      )
      .subscribe(() => {
        this.getAllData();
        this.reset();
      });
  }

  filterData() {
    if (this.search === '') {
      return this.getAllData();
    } else {
      this.lists = this.lists.filter((item) => {
        return this.search.indexOf(item.name) >= 0;
      });
    }
  }
}
