import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesionalesComponent } from './pages/profesionales/profesionales.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "profesionales", component: ProfesionalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
