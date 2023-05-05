import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Wrw1Component } from './wrw1/wrw1.component';
import { Wrw2Component } from './wrw2/wrw2.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "whoarewe1", component: Wrw1Component },
  { path: "whoarewe2", component: Wrw2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
