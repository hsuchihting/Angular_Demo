import { DataService } from './../../service/API/data.service';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  formName = new FormControl('');
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataSvc: DataService) {}

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      height: ['', Validators.required],
      personArr: this.formBuilder.array([]),
    });
    this.form.get('name').valueChanges.subscribe((res) => {
      console.log('value:', res);
    });
    this.creatFormArray();
  }
  get personArr() {
    return this.form.get('personArr') as FormArray;
  }

  //*建立 formArray
  creatFormArray() {
    this.personArr.push(
      this.formBuilder.group({
        name: '提姆',
        height: 175,
      })
    );
    console.log(this.personArr);
    this.getAllData();
    this.getData();
    this.updateData();
  }

  //*取得所有 data
  getAllData() {
    return this.dataSvc.getAllData().subscribe((res) => {
      console.log(res);
    });
  }

  //* 取得單一資料
  getData() {
    return this.dataSvc.getData().subscribe((res) => {
      console.log(res);
    });
  }

  //* 更新一筆資料
  updateData() {
    console.log(this.form.value.personArr);

    return this.dataSvc
      .updateData(
        {
          name: this.form.value.name,
          gender: 'male',
        location: '臺北市',
        },
        1
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //* 新增一筆資料
  insertData() {
    return this.dataSvc
      .insertData({
        name: this.form.value.name,
        gender: 'male',
        location: '臺北市',
      })
      .subscribe((res) => {
        this.getAllData();
        this.reset();
      });
  }

  //*刪除一筆資料
  deleteData(id) {
    return this.dataSvc.deleteData(id).subscribe((res) => {
      console.log(res);
    });
  }

  reset() {
    this.form.reset();
  }
}
