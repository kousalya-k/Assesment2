import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {path:'add', component: AddComponent},
  {path:'list', component:ListComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'delete/:id', component:DeleteComponent},
  {path:'edit/:id1', component:EditComponent},
  {path:'delete/:id1', component:DeleteComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
