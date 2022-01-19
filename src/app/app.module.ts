import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './page/main/main.component';
import { MainChildComponent } from './page/main/main-child/main-child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { PersonComponent } from './page/person/person.component';
import { ValidatorFormComponent } from './page/validator-form/validator-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormComponent } from './page/form/form.component';
import { ListComponent } from './page/list/list.component';
import { TailwindcssComponent } from './page/tailwindcss/tailwindcss.component';
import { RxjsComponent } from './page/rxjs/rxjs.component';
import { PrimengComponent } from './page/primeng/primeng.component';
import { PipeComponent } from './page/pipe/pipe.component';
import { toThousandPipe } from './pipe/toThoudsand.pipe';
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
    TailwindcssComponent,
    RxjsComponent,
    PrimengComponent,
    PipeComponent,
    toThousandPipe
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
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
