import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formName = new FormControl('');
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  get nameArr() {
    return this.form.get('nameArr') as FormArray;
  }

  //* 取得表單的值*/
  getFormValue() {
    console.log('control:', this.formName);
    console.log(this.formName.value);
    console.log('form:', this.form);
    console.log('value:', this.form.value); //無法取得 disabled 的值
    console.log('getRawValue:', this.form.getRawValue()); //可取得 disabled 的值
    console.log('valid:', this.form.valid);
  }
  //* 建立 form 表單
  createForm() {
    this.form = this.formBuilder.group({
      formName: [{ value: '1111', disabled: true }, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nameArr: this.formBuilder.array([]),
    });
    // 驗證表單與觀察表單變數的狀態，類似 vue watch
    this.form.get('formName').valueChanges.subscribe((res) => {
      console.log('value:', res);
    });
    this.createFormArray();
  }

  updateFormValue() {
    this.form.get('firstName').setValue('更新全部表單元件值成功');
    this.form.get('lastName').patchValue('更新部分表單元件值成功');
  }

  //*建立 formArray
  createFormArray() {
    this.nameArr.push(
      this.formBuilder.group({
        firstKidName: '大哥',
        secondKidName: '二哥',
      })
    );
    console.log(this.nameArr);
  }

  //*重新設定表單
  resetForm() {
    this.form.reset();
  }
}
