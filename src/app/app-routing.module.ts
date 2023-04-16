import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RegisterServiceComponent } from './register-service/register-service.component';
import { ListServiceComponent } from './list-service/list-service.component';

const routes: Routes = [
  {component:RegisterComponent,path:'register'},
  {component:HomeComponent,path:'home'},
  {component:HomeComponent,path:''},
  {component:ListComponent,path:'List'},
  {component:RegisterServiceComponent,path:'ServiceR'},
  {component:ListServiceComponent,path:'ServiceL'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
