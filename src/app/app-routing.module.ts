import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: '', component: ContadorComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'users', children: [
    {
      path: '',
      component: UserComponent
    },
    {
      path: 'form',
      component: UserFormComponent
    },
    {
      path: 'form/:id',
      component: UserFormComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
