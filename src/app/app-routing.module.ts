import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './completati/completati.page';
import { TodosPage } from './todos/todos.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'home',
  },
  {
    path: 'home',
    component: TodosPage
  },
  {
    path: 'completati',
    component: CompletatiPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
