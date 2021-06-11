import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formName = new FormControl('');
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.creatForm();
  }
  //*建立表單
  creatForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          ),
        ]),
      ],
    });
  }

  toMain() {
    if (this.loginForm.invalid) {
      alert('登入失敗');
    } else {
      alert('登入成功');
      this.router.navigate(['/main']);
      this.reset();
    }
  }
  //*重新設定
  reset() {
    this.loginForm.reset();
  }

  question() {
    alert('抱歉，今天沒空喔!');
  }
}
