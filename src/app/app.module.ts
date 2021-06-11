import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './page/main/main.component';
import { MainChildComponent } from './page/main/main-child/main-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PersonComponent } from './page/person/person.component';
import { ValidatorFormComponent } from './page/validator-form/validator-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormComponent } from './page/form/form.component';
import { ListComponent } from './page/list/list.component';
// import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainChildComponent,
    LoginComponent,
    FormComponent,
    PersonComponent,
    ListComponent,
    ValidatorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
