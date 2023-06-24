import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { RetrievalComponent } from './components/retrieval/retrieval.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:'Create',component:CreateComponent},
  {path:'Delete',component:DeleteComponent},
  {path:'Retrieval',component:RetrievalComponent},
  {path:'Update', component:UpdateComponent},
  {path:'',component:RetrievalComponent},
  {path:'Update/:id',component:UpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
