import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './page/list/list.component';
import { FormComponent } from './page/form/form.component';
import { MainComponent } from "./page/main/main.component";
import { MainChildComponent } from './page/main/main-child/main-child.component';
import { ValidatorFormComponent } from './page/validator-form/validator-form.component';
import { PersonComponent } from './page/person/person.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'main-child',
        component: MainChildComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'validatorForm',
    component: ValidatorFormComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
