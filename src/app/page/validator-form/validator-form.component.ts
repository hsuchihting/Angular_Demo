import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.scss'],
})
export class ValidatorFormComponent implements OnInit {
  formName = new FormControl('');
  invalidForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.creatForm();
  }
  //*建立表單
  creatForm() {
    this.invalidForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}'),
        ]),
      ],
    });
  }

  //todo 送出按鈕
  confirm() {
    if (this.invalidForm.invalid) {
      alert('表單漏填囉!');
    } else {
      alert('驗證成功');
    }
  }
}
